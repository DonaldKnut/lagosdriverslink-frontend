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
    const approvals = [
      {
        id: "REQ-1001",
        user: "John Doe",
        type: "Driver Registration",
        date: "2023-11-15",
        status: "pending",
        details: "New driver application",
        timestamp: new Date("2023-11-15").toISOString(),
      },
      {
        id: "REQ-1002",
        user: "Jane Smith",
        type: "Vehicle Approval",
        date: "2023-11-14",
        status: "approved",
        details: "Toyota Camry 2020",
        timestamp: new Date("2023-11-14").toISOString(),
      },
      {
        id: "REQ-1003",
        user: "Mike Johnson",
        type: "Document Upload",
        date: "2023-11-13",
        status: "rejected",
        details: "Insurance document expired",
        timestamp: new Date("2023-11-13").toISOString(),
      },
      {
        id: "REQ-1004",
        user: "Sarah Williams",
        type: "Profile Update",
        date: "2023-11-12",
        status: "pending",
        details: "Changed phone number",
        timestamp: new Date("2023-11-12").toISOString(),
      },
      {
        id: "REQ-1005",
        user: "David Brown",
        type: "Vehicle Approval",
        date: "2023-11-11",
        status: "pending",
        details: "Honda Accord 2019",
        timestamp: new Date("2023-11-11").toISOString(),
      },
    ];

    const stats = {
      pending: approvals.filter((a) => a.status === "pending").length,
      approvedToday: approvals.filter(
        (a) =>
          a.status === "approved" &&
          new Date(a.date).toDateString() === new Date().toDateString()
      ).length,
      rejectedToday: approvals.filter(
        (a) =>
          a.status === "rejected" &&
          new Date(a.date).toDateString() === new Date().toDateString()
      ).length,
    };

    return NextResponse.json({ approvals, stats });
  } catch (error) {
    console.error("Dashboard approvals error:", error);
    return NextResponse.json(
      { error: "Failed to fetch approval requests" },
      { status: 500 }
    );
  }
}
