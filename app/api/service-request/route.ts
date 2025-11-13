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
  serviceType: string;
  additionalNotes?: string;
  // Domestic staff-specific fields
  staffType?: string;
  preferredReligion?: string;
  workSchedule?: string;
  accommodationAvailable?: boolean;
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
  serviceType: string;
  additionalNotes?: string;
  // Domestic staff-specific fields
  staffType?: string;
  preferredReligion?: string;
  workSchedule?: string;
  accommodationAvailable?: boolean;
  status: string;
  createdAt: string;
}

export async function POST(request: Request) {
  const startTime = Date.now();
  console.log("🚀 Service request API called at:", new Date().toISOString());

  try {
    // Step 1: Validate environment variables
    console.log("📋 Step 1: Validating environment variables...");

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }
    console.log("✅ RESEND_API_KEY is configured");

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.error("❌ SANITY_API_WRITE_TOKEN is not configured");
      return NextResponse.json(
        { success: false, error: "Database service not configured" },
        { status: 500 }
      );
    }
    console.log("✅ SANITY_API_WRITE_TOKEN is configured");

    // Step 2: Parse request body
    console.log("📋 Step 2: Parsing request body...");
    let requestBody: RequestBody;
    try {
      requestBody = await request.json();
      console.log("✅ Request body parsed successfully");
      console.log("📄 Request data:", JSON.stringify(requestBody, null, 2));
    } catch (parseError) {
      console.error("❌ Failed to parse request body:", parseError);
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 }
      );
    }
    const {
      fullName,
      email,
      phone,
      location,
      serviceType,
      additionalNotes,
      staffType,
      preferredReligion,
      workSchedule,
      accommodationAvailable,
      confirmationEmail,
      teamEmail,
    } = requestBody;

    // Step 3: Validate input data
    console.log("📋 Step 3: Validating input data...");
    if (!fullName || !email || !phone || !location || !serviceType) {
      console.error("❌ Missing required fields:", {
        fullName: !!fullName,
        email: !!email,
        phone: !!phone,
        location: !!location,
        serviceType: !!serviceType,
      });
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    console.log("✅ All required fields are present");

    // Step 4: Create Sanity document
    console.log("📋 Step 4: Creating Sanity document...");
    
    // Define domestic staff types
    const domesticStaffTypes = [
      "House Cleaner",
      "Chef",
      "Nanny",
      "Teacher",
      "Tailor",
      "Plumber",
    ];
    
    const doc: SanityDocument = {
      _type: "serviceRequest",
      fullName,
      email,
      phone,
      location,
      serviceType,
      additionalNotes,
      // Include domestic staff-specific fields if applicable
      ...(domesticStaffTypes.includes(serviceType) && {
        staffType,
        preferredReligion,
        workSchedule,
        accommodationAvailable,
      }),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    console.log("📄 Sanity document prepared:", JSON.stringify(doc, null, 2));

    // Step 5: Save to Sanity
    console.log("📋 Step 5: Saving to Sanity...");
    let result;
    try {
      result = await sanityClient.create(doc);
      console.log(
        "✅ Sanity document created successfully with ID:",
        result._id
      );
    } catch (sanityError) {
      console.error("❌ Failed to save to Sanity:", sanityError);
      return NextResponse.json(
        { success: false, error: "Failed to save request to database" },
        { status: 500 }
      );
    }

    // Step 6: Configure email sender
    console.log("📋 Step 6: Configuring email sender...");
    const emailFrom =
      process.env.EMAIL_FROM ||
      "Lagos Drivers Link <no-reply@lagosdriverslink.com>";
    console.log("📧 Email sender configured:", emailFrom);

    // Step 7: Send confirmation email to user
    console.log("📋 Step 7: Sending confirmation email to user...");
    let confirmationResult;
    try {
      confirmationResult = await resend.emails.send({
        from: emailFrom,
        to: email,
        subject: `Service Request Confirmation - ${serviceType} - LagosDriversLink`,
        html: confirmationEmail.html,
      });

      if (confirmationResult.error) {
        console.error(
          "❌ Failed to send confirmation email:",
          confirmationResult.error
        );
        throw new Error(
          `Failed to send confirmation email: ${confirmationResult.error.message}`
        );
      }

      console.log("✅ Confirmation email sent successfully to:", email);
    } catch (confirmationError) {
      console.error("❌ Confirmation email error:", confirmationError);
      return NextResponse.json(
        { success: false, error: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    // Step 8: Send notification email to team
    console.log("📋 Step 8: Sending notification email to team...");
    let teamEmailResult;
    try {
      teamEmailResult = await resend.emails.send({
        from: emailFrom,
        to: "teams@lagosdriverslink.com",
        subject: `New Service Request: ${serviceType}`,
        html: teamEmail.html,
      });

      if (teamEmailResult.error) {
        console.error(
          "❌ Failed to send team notification email:",
          teamEmailResult.error
        );
        throw new Error(
          `Failed to send team notification email: ${teamEmailResult.error.message}`
        );
      }

      console.log(
        "✅ Team notification email sent successfully to: teams@lagosdriverslink.com"
      );
    } catch (teamEmailError) {
      console.error("❌ Team notification email error:", teamEmailError);
      return NextResponse.json(
        { success: false, error: "Failed to send team notification email" },
        { status: 500 }
      );
    }

    // Step 9: Success response
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log("🎉 All steps completed successfully!");
    console.log("⏱️ Total processing time:", duration + "ms");

    return NextResponse.json({
      success: true,
      requestId: result._id,
      processingTime: duration + "ms",
    });
  } catch (error: unknown) {
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.error("💥 Unhandled error occurred after", duration + "ms");
    console.error("❌ Error details:", error);

    let errorMessage = "Failed to process request";
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error("❌ Error message:", errorMessage);
      console.error("❌ Error stack:", error.stack);
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        processingTime: duration + "ms",
      },
      { status: 500 }
    );
  }
}


