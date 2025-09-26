import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Replace with actual database queries
    // For now, return mock data that could come from your database
    const user = {
      id: session.user?.id || "1",
      name: session.user?.name || "Admin User",
      email: session.user?.email || "admin@lagosdrivers.com",
      firstName: "John",
      lastName: "Doe",
      bio: "Admin user for Lagos Drivers platform",
      emailNotifications: true,
      twoFactorEnabled: false,
      sessionTimeout: true,
      createdAt: new Date("2023-01-01").toISOString(),
      lastLogin: new Date().toISOString(),
    };

    return NextResponse.json(user);
  } catch (error) {
    console.error("User data error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    // TODO: Update user data in database
    // For now, just return success
    console.log("Updating user data:", body);

    return NextResponse.json({
      success: true,
      message: "User data updated successfully",
    });
  } catch (error) {
    console.error("User update error:", error);
    return NextResponse.json(
      { error: "Failed to update user data" },
      { status: 500 }
    );
  }
}
