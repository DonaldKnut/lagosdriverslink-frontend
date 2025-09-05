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
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 800px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 40px 30px; text-align: center; color: #ffffff;">
          <div style="font-size: 48px; margin-bottom: 16px;">🚗</div>
          <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 8px 0; color: #ffffff;">New Driver Request</h1>
          <p style="font-size: 16px; margin: 0; opacity: 0.9;">Action Required - Review and Contact Client</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
            <p style="font-size: 18px; font-weight: 600; color: #92400e; margin: 0 0 8px 0;">📞 Contact Client</p>
            <p style="font-size: 16px; color: #92400e; margin: 0;">+234 903 270 2233</p>
          </div>

          <!-- Personal Details -->
          <div style="background: #f9fafb; padding: 24px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #f59e0b;">
            <h3 style="color: #1f2937; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">👤 Personal Details</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px; color: #374151;">
              <div><strong>Full Name:</strong> ${personalDetails.fullName || "Not provided"}</div>
              <div><strong>Email:</strong> ${personalDetails.emailAddress || "Not provided"}</div>
              <div><strong>Phone:</strong> ${personalDetails.phoneNumber || "Not provided"}</div>
              <div><strong>Marital Status:</strong> ${personalDetails.maritalStatus}</div>
            </div>
          </div>

          <!-- Driver Requirements -->
          <div style="background: #f9fafb; padding: 24px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #10b981;">
            <h3 style="color: #1f2937; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">🚗 Driver Requirements</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px; color: #374151;">
              <div><strong>Driver Type:</strong> ${projectDetails.driverType}</div>
              <div><strong>Contract Duration:</strong> ${projectDetails.contractDuration}</div>
              <div><strong>Work Schedule:</strong> ${projectDetails.workSchedule}</div>
              <div><strong>Resumption Date:</strong> ${projectDetails.resumptionDate}</div>
              <div><strong>Start Time:</strong> ${projectDetails.resumptionTime}</div>
              <div><strong>End Time:</strong> ${projectDetails.closingTime}</div>
            </div>
            <div style="margin-top: 16px;">
              <strong style="color: #1f2937;">Duties Description:</strong>
              <p style="color: #374151; margin: 8px 0 0 0; line-height: 1.5;">${projectDetails.dutiesDescription}</p>
            </div>
          </div>

          <!-- Vehicle Information -->
          <div style="background: #f9fafb; padding: 24px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1f2937; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">🚙 Vehicle Information</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px; color: #374151;">
              <div><strong>Provides Vehicle:</strong> ${vehicleDetails.providesVehicle}</div>
              <div><strong>Vehicle Type:</strong> ${vehicleDetails.vehicleType}</div>
              <div><strong>Transmission:</strong> ${vehicleDetails.transmissionType}</div>
              <div><strong>Insurance:</strong> ${vehicleDetails.insuranceType}</div>
            </div>
            ${
              vehicleDetails.providesVehicle === "yes"
                ? `
            <div style="margin-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px; color: #374151;">
              <div><strong>Brand:</strong> ${vehicleDetails.vehicleBrand}</div>
              <div><strong>Model:</strong> ${vehicleDetails.vehicleModel}</div>
              <div><strong>Year:</strong> ${vehicleDetails.vehicleYear}</div>
            </div>
            `
                : ""
            }
          </div>

          <!-- Address Information -->
          <div style="background: #f9fafb; padding: 24px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #8b5cf6;">
            <h3 style="color: #1f2937; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">📍 Address Information</h3>
            <div style="font-size: 14px; color: #374151; line-height: 1.6;">
              <div style="margin-bottom: 12px;">
                <strong>Home Address:</strong><br>
                ${addressInformation.homeAddress}
              </div>
              <div>
                <strong>Office Address:</strong><br>
                ${addressInformation.officeAddress}
              </div>
            </div>
          </div>

          <!-- Action Button -->
          <div style="text-align: center; margin-top: 32px;">
            <div style="background: #f59e0b; color: #ffffff; padding: 16px 32px; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px;">
              ⏰ Respond within 24 hours
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280; margin: 0;">© 2024 LagosDriversLINK. Professional driver services across Lagos, Nigeria</p>
        </div>
      </div>
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
