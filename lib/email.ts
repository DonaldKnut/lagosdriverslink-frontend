// lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailOptions {
  to: string;
  subject: string;
  react: React.ReactElement;
}

export async function sendEmail({ to, subject, react }: EmailOptions) {
  if (!resend) {
    throw new Error("Resend API client not initialized");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "LagosDriversLink <no-reply@lagosdriverslink.com>",
      to,
      subject,
      react,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
