"use client";

import { useState, useEffect } from "react";
import { Users, Clock, Car, CheckCircle } from "lucide-react";
import { useToast } from "@/app/components/Toast";

interface DashboardStats {
  totalDrivers: number;
  pendingApprovals: number;
  activeTrips: number;
  completedTrips: number;
  driversChange: number;
  approvalsChange: number;
  tripsChange: number;
  completedChange: number;
}

interface Activity {
  id: string;
  driver: string;
  action: string;
  time: string;
  status: string;
  timestamp: string;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const { trigger } = useToast();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Fetch stats and activity in parallel
        const [statsResponse, activityResponse] = await Promise.all([
          fetch("/api/dashboard/stats"),
          fetch("/api/dashboard/activity"),
        ]);

        if (!statsResponse.ok || !activityResponse.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const [statsData, activityData] = await Promise.all([
          statsResponse.json(),
          activityResponse.json(),
        ]);

        setStats(statsData);
        setRecentActivity(activityData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        trigger("error", "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [trigger]);

  const formatStats = (stats: DashboardStats) => [
    {
      title: "Total Drivers",
      value: stats.totalDrivers.toLocaleString(),
      icon: <Users className="w-8 h-8 text-amber-500" />,
      change: `${stats.driversChange > 0 ? "+" : ""}${stats.driversChange}%`,
      positive: stats.driversChange > 0,
    },
    {
      title: "Pending Approvals",
      value: stats.pendingApprovals.toString(),
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      change:
        stats.approvalsChange > 0
          ? `+${stats.approvalsChange}`
          : stats.approvalsChange.toString(),
      positive: stats.approvalsChange > 0,
    },
    {
      title: "Active Trips",
      value: stats.activeTrips.toString(),
      icon: <Car className="w-8 h-8 text-amber-500" />,
      change: `+${stats.tripsChange}%`,
      positive: stats.tripsChange > 0,
    },
    {
      title: "Completed Trips",
      value: stats.completedTrips.toLocaleString(),
      icon: <CheckCircle className="w-8 h-8 text-amber-500" />,
      change: `+${stats.completedChange}%`,
      positive: stats.completedChange > 0,
    },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 animate-pulse"
            >
              <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-gray-700 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-700 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-amber-100">
            Error Loading Dashboard
          </h2>
          <p className="text-gray-300 mt-2">
            Unable to load dashboard data. Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  const formattedStats = formatStats(stats);

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-amber-100">Welcome, Admin!</h2>
        <p className="text-gray-300 mt-2">
          Manage your drivers and trips efficiently from the Lagos Drivers Admin
          dashboard.
        </p>
        <button className="mt-4 px-4 py-2 bg-amber-600 text-black font-semibold rounded-lg hover:bg-amber-700 transition">
          View All Drivers
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {formattedStats.map((stat) => (
          <div
            key={stat.title}
            className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p
                  className={`text-sm ${
                    stat.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden relative z-10">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-amber-100">
            Recent Activity
          </h3>
          <table className="w-full mt-4 text-left">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-700">
                <th className="py-3">Driver</th>
                <th className="py-3">Action</th>
                <th className="py-3">Time</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <td className="py-3 text-white">{activity.driver}</td>
                  <td className="py-3 text-gray-300">{activity.action}</td>
                  <td className="py-3 text-gray-300">{activity.time}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        activity.status === "Success"
                          ? "bg-green-500/20 text-green-500"
                          : activity.status === "Pending"
                            ? "bg-amber-500/20 text-amber-500"
                            : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-amber-100">
          Driver Activity Overview
        </h3>
        <div className="mt-4 h-64 flex items-center justify-center bg-gray-700 rounded-lg">
          <p className="text-gray-400">
            Chart placeholder (e.g., trips per day)
          </p>
        </div>
      </div>
    </div>
  );
}
