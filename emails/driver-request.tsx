import React from "react";

interface DriverRequestEmailProps {
  plan: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  vehicleDetails: {
    type: string;
    transmission: string;
    insurance: string;
    brand: string;
    model: string;
    year: string;
  };
  additionalNotes: string;
}

export const DriverRequestEmail: React.FC<DriverRequestEmailProps> = ({
  plan,
  fullName,
  email,
  phone,
  location,
  vehicleDetails,
  additionalNotes,
}) => {
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
          New Driver Request
        </h1>

        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#444",
            }}
          >
            Request Details
          </h2>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Plan:</strong> {plan}
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Full Name:</strong> {fullName}
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${email}`}
              style={{ color: "#1a73e8", textDecoration: "none" }}
            >
              {email}
            </a>
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Phone:</strong>{" "}
            <a
              href={`tel:${phone}`}
              style={{ color: "#1a73e8", textDecoration: "none" }}
            >
              {phone}
            </a>
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Location:</strong> {location}
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#444",
            }}
          >
            Vehicle Details
          </h2>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Type:</strong> {vehicleDetails.type || "N/A"}
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Transmission:</strong>{" "}
            {vehicleDetails.transmission || "N/A"}
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Insurance:</strong> {vehicleDetails.insurance || "N/A"}
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Brand:</strong> {vehicleDetails.brand || "N/A"}
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Model:</strong> {vehicleDetails.model || "N/A"}
          </p>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            <strong>Year:</strong> {vehicleDetails.year || "N/A"}
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#444",
            }}
          >
            Additional Notes
          </h2>
          <p style={{ margin: "8px 0", lineHeight: "1.6" }}>
            {additionalNotes || "No additional notes provided."}
          </p>
        </div>

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
