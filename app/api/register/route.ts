import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sanityClient } from "@/lib/sanity";
import { Resend } from "resend";
import { render } from "@react-email/render";
import React from "react";
import UserRegistrationEmail from "@/emails/UserRegistrationEmail";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const startTime = Date.now();
  console.log("🚀 User registration API called at:", new Date().toISOString());

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
    let body;
    try {
      body = await req.json();
      console.log("✅ Request body parsed successfully");
    } catch (parseError) {
      console.error("❌ Failed to parse request body:", parseError);
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { name, email, password, dob } = body;

    // Step 3: Validate input data
    console.log("📋 Step 3: Validating input data...");
    if (!name || !email || !password || !dob) {
      console.error("❌ Missing required fields:", {
        name: !!name,
        email: !!email,
        password: !!password,
        dob: !!dob,
      });
      return NextResponse.json(
        { success: false, error: "All fields required" },
        { status: 400 }
      );
    }
    console.log("✅ All required fields are present");

    // Step 4: Check if user already exists
    console.log("📋 Step 4: Checking if user already exists...");
    const existing = await sanityClient.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (existing) {
      console.error("❌ User already exists with email:", email);
      return NextResponse.json(
        { success: false, error: "Email already exists" },
        { status: 409 }
      );
    }
    console.log("✅ User does not exist, proceeding with registration");

    // Step 5: Hash password
    console.log("📋 Step 5: Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("✅ Password hashed successfully");

    // Step 6: Create user in Sanity
    console.log("📋 Step 6: Creating user in Sanity...");
    let userResult;
    try {
      userResult = await sanityClient.create({
        _type: "user",
        name,
        email,
        password: hashedPassword,
        dob,
        role: "client",
        createdAt: new Date().toISOString(),
      });
      console.log("✅ User created successfully with ID:", userResult._id);
    } catch (sanityError) {
      console.error("❌ Failed to save to Sanity:", sanityError);
      return NextResponse.json(
        { success: false, error: "Failed to save user to database" },
        { status: 500 }
      );
    }

    // Step 7: Configure email sender
    console.log("📋 Step 7: Configuring email sender...");
    const emailFrom =
      process.env.EMAIL_FROM ||
      "Lagos Drivers Link <no-reply@lagosdriverslink.com>";
    console.log("📧 Email sender configured:", emailFrom);

    // Step 8: Send admin notification email
    console.log("📋 Step 8: Sending admin notification email...");
    let adminEmailResult;
    try {
      const adminEmailHtml = await render(
        React.createElement(UserRegistrationEmail, { name, email, dob })
      );

      adminEmailResult = await resend.emails.send({
        from: emailFrom,
        to: "teams@lagosdriverslink.com",
        subject: "New User Registration - LagosDriversLink",
        html: adminEmailHtml,
      });

      if (adminEmailResult.error) {
        console.error(
          "❌ Failed to send admin notification email:",
          adminEmailResult.error
        );
        // Don't fail registration if email fails
        console.log("⚠️ Continuing with registration despite email failure");
      } else {
        console.log(
          "✅ Admin notification email sent successfully to: teams@lagosdriverslink.com"
        );
      }
    } catch (emailError) {
      console.error("❌ Admin email error:", emailError);
      // Don't fail registration if email fails
      console.log("⚠️ Continuing with registration despite email failure");
    }

    // Step 9: Success response
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log("🎉 Registration completed successfully!");
    console.log("⏱️ Total processing time:", duration + "ms");

    return NextResponse.json(
      {
        success: true,
        userId: userResult._id,
        processingTime: duration + "ms",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.error("💥 Unhandled error occurred after", duration + "ms");
    console.error("❌ Error details:", error);

    let errorMessage = "Failed to register user";
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
