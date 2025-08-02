import { NextResponse } from "next/server";
import { sanityClient } from "../../../lib/sanity";
import { Resend } from "resend";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  plan: string;
  additionalNotes?: string;
  confirmationEmail: {
    html: string;
  };
  teamEmail: {
    html: string;
  };
}

interface SanityDocument {
  _type: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  plan: string;
  additionalNotes?: string;
  status: string;
  createdAt: string;
}

export async function POST(request: Request) {
  try {
    const requestBody: RequestBody = await request.json();
    const {
      fullName,
      email,
      phone,
      location,
      plan,
      additionalNotes,
      confirmationEmail,
      teamEmail,
    } = requestBody;

    // Validate input
    if (!fullName || !email || !phone || !location || !plan) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create Sanity document
    const doc: SanityDocument = {
      _type: "planDriverRequest",
      fullName,
      email,
      phone,
      location,
      plan,
      additionalNotes,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Save to Sanity
    const result = await sanityClient.create(doc);

    // Configure email sender
    const emailFrom =
      process.env.EMAIL_FROM ||
      "Lagos Drivers Link <no-reply@lagosdriverslink.com>";

    // Send confirmation email to user
    await resend.emails.send({
      from: emailFrom,
      to: email,
      subject: "Driver Request Confirmation - LagosDriversLink",
      html: confirmationEmail.html,
    });

    // Send notification email to team
    await resend.emails.send({
      from: emailFrom,
      to: "support@lagosdriverslink.com",
      subject: "New Driver Request Submitted",
      html: teamEmail.html,
    });

    return NextResponse.json({ success: true, requestId: result._id });
  } catch (error: unknown) {
    let errorMessage = "Failed to process request";
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error("Error processing request:", errorMessage, error);
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
