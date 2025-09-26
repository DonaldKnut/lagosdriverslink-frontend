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
    const activities = [
      {
        id: "1",
        driver: "John Adebayo",
        action: "Completed Trip",
        time: "2 hours ago",
        status: "Success",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "2",
        driver: "Aisha Okonkwo",
        action: "Requested Approval",
        time: "4 hours ago",
        status: "Pending",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "3",
        driver: "Chinedu Obi",
        action: "Started Trip",
        time: "6 hours ago",
        status: "In Progress",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "4",
        driver: "Funmi Ade",
        action: "Profile Updated",
        time: "1 day ago",
        status: "Success",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
    ];

    return NextResponse.json(activities);
  } catch (error) {
    console.error("Dashboard activity error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard activity" },
      { status: 500 }
    );
  }
}
