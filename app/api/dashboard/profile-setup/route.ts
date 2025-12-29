import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    // TODO: Save profile data to database
    // For now, just return success
    console.log("Profile setup data:", {
      userId: session.user?.id,
      profileData: body,
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Profile information saved successfully",
    });
  } catch (error) {
    console.error("Profile setup error:", error);
    return NextResponse.json(
      { error: "Failed to save profile information" },
      { status: 500 }
    );
  }
}





