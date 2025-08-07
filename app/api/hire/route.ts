import { NextRequest, NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity";
import { sendDriverRequestMail, sendCustomerEmail } from "@/utils/mail";

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  console.log("🚀 Hire API called at:", new Date().toISOString());

  try {
    // Step 1: Parse request body
    console.log("📋 Step 1: Parsing request body...");
    let requestData;
    try {
      requestData = await req.json();
      console.log("✅ Request body parsed successfully");
    } catch (parseError) {
      console.error("❌ Failed to parse request body:", parseError);
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const {
      personalDetails,
      projectDetails,
      vehicleDetails,
      addressInformation,
    } = requestData;

    // Format request details as HTML for email body
    const requestDetailsHtml = `
      <h2 style="color: #facc15; font-family: Arial, sans-serif;">Driver Request Details</h2>
      <h3 style="color: #eab308; font-family: Arial, sans-serif;">Personal Details</h3>
      <p style="font-family: Arial, sans-serif;">
        <strong>Full Name:</strong> ${personalDetails.fullName || "Not provided"}<br />
        <strong>Email:</strong> ${personalDetails.emailAddress || "Not provided"}<br />
        <strong>Phone:</strong> ${personalDetails.phoneNumber || "Not provided"}<br />
        <strong>Marital Status:</strong> ${personalDetails.maritalStatus}
      </p>
      <h3 style="color: #eab308; font-family: Arial, sans-serif;">Driver Requirements</h3>
      <p style="font-family: Arial, sans-serif;">
        <strong>Driver Type:</strong> ${projectDetails.driverType}<br />
        <strong>Contract Duration:</strong> ${projectDetails.contractDuration}<br />
        <strong>Salary:</strong> ₦${projectDetails.salaryPackage}<br />
        <strong>Work Schedule:</strong> ${projectDetails.workSchedule}<br />
        <strong>Accommodation:</strong> ${projectDetails.accommodationProvided}<br />
        <strong>Duties:</strong> ${projectDetails.dutiesDescription}<br />
        <strong>Resumption:</strong> ${projectDetails.resumptionDate} ${projectDetails.resumptionTime}<br />
        <strong>Closing Time:</strong> ${projectDetails.closingTime}
      </p>
      <h3 style="color: #eab308; font-family: Arial, sans-serif;">Vehicle Information</h3>
      <p style="font-family: Arial, sans-serif;">
        <strong>Provides Vehicle:</strong> ${vehicleDetails.providesVehicle}<br />
        <strong>Vehicle Info:</strong> ${vehicleDetails.vehicleBrand} ${vehicleDetails.vehicleModel} (${vehicleDetails.vehicleYear})<br />
        <strong>Transmission:</strong> ${vehicleDetails.transmissionType}<br />
        <strong>Insurance:</strong> ${vehicleDetails.insuranceType}
      </p>
      <h3 style="color: #eab308; font-family: Arial, sans-serif;">Address Information</h3>
      <p style="font-family: Arial, sans-serif;">
        <strong>Home Address:</strong> ${addressInformation.homeAddress}<br />
        <strong>Office Address:</strong> ${addressInformation.officeAddress}
      </p>
    `;

    // Step 2: Save to Sanity
    console.log("📋 Step 2: Saving to Sanity...");
    let sanityResult;
    try {
      sanityResult = await sanityClient.create({
        _type: "driverRequest",
        fullName: personalDetails.fullName,
        email: personalDetails.emailAddress,
        phone: personalDetails.phoneNumber,
        location: "Not specified", // Since preferredDriverLocation was removed
        requestDetails: requestDetailsHtml.replace(/<[^>]+>/g, ""), // Store plain text version in Sanity
        submittedAt: new Date().toISOString(),
      });
      console.log(
        "✅ Sanity document created successfully with ID:",
        sanityResult._id
      );
    } catch (sanityError) {
      console.error("❌ Failed to save to Sanity:", sanityError);
      return NextResponse.json(
        { message: "Failed to save request to database" },
        { status: 500 }
      );
    }

    // Step 3: Send Admin Email with HTML content
    console.log("📋 Step 3: Sending admin email...");
    try {
      await sendDriverRequestMail({
        html: requestDetailsHtml,
        emailData: {
          fullName: personalDetails.fullName,
          email: personalDetails.emailAddress,
          phone: personalDetails.phoneNumber,
          location: "Not specified", // Since preferredDriverLocation was removed
          requestDetails: requestDetailsHtml,
        },
      });
      console.log("✅ Admin email sent successfully");
    } catch (adminEmailError) {
      console.error("❌ Failed to send admin email:", adminEmailError);
      return NextResponse.json(
        { message: "Failed to send admin notification email" },
        { status: 500 }
      );
    }

    // Step 4: Send Confirmation Email to Customer (only if email is provided)
    if (personalDetails.emailAddress && personalDetails.emailAddress.trim()) {
      console.log("📋 Step 4: Sending customer confirmation email...");
      try {
        await sendCustomerEmail({
          fullName: personalDetails.fullName,
          to: personalDetails.emailAddress,
        });
        console.log("✅ Customer confirmation email sent successfully");
      } catch (customerEmailError) {
        console.error("❌ Failed to send customer email:", customerEmailError);
        // Don't fail the entire request if customer email fails
        console.log(
          "⚠️ Continuing with request despite customer email failure"
        );
      }
    } else {
      console.log(
        "📋 Step 4: Skipping customer confirmation email (no email provided)"
      );
    }

    // Step 5: Success response
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log("🎉 All steps completed successfully!");
    console.log("⏱️ Total processing time:", duration + "ms");

    return NextResponse.json(
      {
        message: "Submitted successfully",
        processingTime: duration + "ms",
        requestId: sanityResult._id,
      },
      { status: 200 }
    );
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.error("💥 Unhandled error occurred after", duration + "ms");
    console.error("❌ Error details:", error);

    if (error instanceof Error) {
      console.error("❌ Error message:", error.message);
      console.error("❌ Error stack:", error.stack);
    }

    return NextResponse.json(
      {
        message: "Internal Server Error",
        processingTime: duration + "ms",
      },
      { status: 500 }
    );
  }
}
