import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY not configured" },
        { status: 500 }
      );
    }

    const { to } = await request.json();

    const emailFrom =
      process.env.EMAIL_FROM ||
      "Lagos Drivers Link <no-reply@lagosdriverslink.com>";

    const result = await resend.emails.send({
      from: emailFrom,
      to: to || "teams@lagosdriverslink.com",
      subject: "Test Email - LagosDriversLink",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a73e8;">Test Email</h1>
          <p>This is a test email to verify that the email configuration is working properly.</p>
          <p>If you receive this email, the Resend API is configured correctly.</p>
          <p>Sent at: ${new Date().toISOString()}</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Test email failed:", result.error);
      return NextResponse.json(
        { success: false, error: result.error.message },
        { status: 500 }
      );
    }

    console.log("Test email sent successfully");
    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
    });
  } catch (error) {
    console.error("Test email error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
