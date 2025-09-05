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
    subject: "🚗 New Driver Request - Action Required",
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
        backgroundColor: "#ffffff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
          padding: "40px 30px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            marginBottom: "16px",
          }}
        >
          🚗
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            margin: "0 0 8px 0",
            color: "#ffffff",
          }}
        >
          LagosDriversLINK
        </h1>
        <p
          style={{
            fontSize: "16px",
            margin: "0",
            opacity: "0.9",
          }}
        >
          Professional Driver Services
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "40px 30px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 20px 0",
          }}
        >
          Hello {displayName}! 👋
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#374151",
            margin: "0 0 20px 0",
          }}
        >
          Thank you for choosing <strong>LagosDriversLINK</strong> for your
          driver request. We've successfully received your application and our
          team is excited to help you find the perfect driver.
        </p>

        <div
          style={{
            background: "#f3f4f6",
            padding: "24px",
            borderRadius: "8px",
            margin: "24px 0",
            borderLeft: "4px solid #f59e0b",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1f2937",
              margin: "0 0 12px 0",
            }}
          >
            What happens next?
          </h3>
          <ul
            style={{
              margin: "0",
              paddingLeft: "20px",
              color: "#374151",
              lineHeight: "1.6",
            }}
          >
            <li>Our team will review your requirements within 24 hours</li>
            <li>We'll contact you to discuss driver options and pricing</li>
            <li>We'll arrange driver interviews and background checks</li>
            <li>Final placement and onboarding process</li>
          </ul>
        </div>

        <div
          style={{
            background: "#fef3c7",
            padding: "20px",
            borderRadius: "8px",
            margin: "24px 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#92400e",
              margin: "0 0 12px 0",
            }}
          >
            Need immediate assistance?
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#92400e",
              margin: "0",
            }}
          >
            📞 +234 903 270 2233
          </p>
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            margin: "32px 0 0 0",
            textAlign: "center",
          }}
        >
          Thank you for trusting us with your driver needs!
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#f9fafb",
          padding: "24px 30px",
          textAlign: "center",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#6b7280",
            margin: "0 0 8px 0",
          }}
        >
          © 2024 LagosDriversLINK. All rights reserved.
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#6b7280",
            margin: "0",
          }}
        >
          Professional driver services across Lagos, Nigeria
        </p>
      </div>
    </div>
  );

  const result = await resend.emails.send({
    from: "LagosDriversLINK <noreply@lagosdriverslink.com>",
    to,
    subject: "✅ Your Driver Request Confirmation - LagosDriversLINK",
    html,
  });

  if (result.error) {
    console.error("❌ Customer email failed:", result.error);
    throw new Error(`Customer email failed: ${result.error.message}`);
  }

  console.log("✅ Customer confirmation email sent successfully");
  return result;
};
