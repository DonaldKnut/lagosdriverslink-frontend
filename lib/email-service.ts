import { Resend } from "resend";
import React from "react";

interface EmailOptions {
  to: string;
  subject: string;
  react: React.ReactElement;
}

const resendClient = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  react,
}: EmailOptions): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  if (!process.env.COMPANY_EMAIL_ADDRESS) {
    throw new Error("COMPANY_EMAIL_ADDRESS environment variable is not set");
  }

  try {
    const { error } = await resendClient.emails.send({
      from: `Lagos Drivers Link <${process.env.COMPANY_EMAIL_ADDRESS}>`,
      to,
      subject,
      react,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}
