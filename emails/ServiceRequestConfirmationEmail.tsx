import React from "react";

interface ServiceRequestConfirmationEmailProps {
  serviceType: string;
  fullName: string;
  requestId: string;
}

export const ServiceRequestConfirmationEmail: React.FC<
  ServiceRequestConfirmationEmailProps
> = ({ serviceType, fullName, requestId }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1a73e8",
            marginBottom: "20px",
          }}
        >
          Thank You for Your Service Request
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "15px",
          }}
        >
          Dear {fullName},
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "15px",
          }}
        >
          We have successfully received your request for a{" "}
          <strong>{serviceType}</strong>.
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "15px",
          }}
        >
          <strong>Your Request ID:</strong> {requestId}
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "15px",
          }}
        >
          Our team will review your request and contact you shortly with next
          steps. If you have any questions, feel free to reach out to us at{" "}
          <a
            href="mailto:teams@lagosdriverslink.com"
            style={{ color: "#1a73e8", textDecoration: "none" }}
          >
            teams@lagosdriverslink.com
          </a>
          .
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "15px",
          }}
        >
          Thank you for choosing Lagos Drivers Link!
        </p>

        <div
          style={{
            borderTop: "1px solid #e0e0e0",
            paddingTop: "20px",
            textAlign: "center",
            color: "#666",
            fontSize: "14px",
          }}
        >
          <p>
            Best regards,
            <br />
            The Lagos Drivers Link Team
          </p>
          <p>
            © {new Date().getFullYear()} Lagos Drivers Link. All rights
            reserved.
          </p>
          <p>
            <a
              href="https://lagosdriverslink.com"
              style={{ color: "#1a73e8", textDecoration: "none" }}
            >
              Visit our website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};









