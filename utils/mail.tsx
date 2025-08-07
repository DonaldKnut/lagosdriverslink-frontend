import React from "react";
import { render } from "@react-email/render";
import { resend } from "@/lib/resend";
import DriverRequestEmail from "@/emails/DriverRequestEmail";

// Admin Email (with HTML content)
export const sendDriverRequestMail = async ({
  html,
  emailData,
}: {
  html: string;
  emailData: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    requestDetails: string;
  };
}) => {
  console.log("📧 Sending admin email to teams@lagosdriverslink.com");

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const result = await resend.emails.send({
    from: "LagosDriversLINK <noreply@lagosdriverslink.com>",
    to: "teams@lagosdriverslink.com",
    subject: "New Driver Request Submitted",
    html,
  });

  if (result.error) {
    console.error("❌ Admin email failed:", result.error);
    throw new Error(`Admin email failed: ${result.error.message}`);
  }

  console.log("✅ Admin email sent successfully");
  return result;
};

// Customer Confirmation Email
export const sendCustomerEmail = async ({
  fullName,
  to,
}: {
  fullName: string;
  to: string;
}) => {
  console.log("📧 Sending customer confirmation email to:", to);

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const displayName =
    fullName && fullName.trim() ? fullName : "Valued Customer";

  const html = await render(
    <div
      style={{
        backgroundColor: "#0a0a0a",
        padding: "2rem",
        borderRadius: "1rem",
        color: "#facc15",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ color: "#fde047" }}>Hello {displayName},</h2>
      <p>
        Thank you for submitting your driver request on{" "}
        <strong>LagosDriversLINK</strong>.
      </p>
      <p>
        Our team will contact you within 24 hours to discuss your requirements.
      </p>
      <p style={{ fontSize: "13px", color: "#eab308" }}>
        Need urgent help? Call or WhatsApp us at 0800-DRIVER-NOW.
      </p>
    </div>
  );

  const result = await resend.emails.send({
    from: "LagosDriversLINK <noreply@lagosdriverslink.com>",
    to,
    subject: "Your Driver Request Has Been Received",
    html,
  });

  if (result.error) {
    console.error("❌ Customer email failed:", result.error);
    throw new Error(`Customer email failed: ${result.error.message}`);
  }

  console.log("✅ Customer confirmation email sent successfully");
  return result;
};
