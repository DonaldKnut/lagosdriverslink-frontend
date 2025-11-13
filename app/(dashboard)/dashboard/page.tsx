"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Clock,
  Car,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Activity,
  ShieldCheck,
  Calendar,
  Mail,
  UserPlus,
  FileText,
  Bell,
} from "lucide-react";
import { useToast, Toast } from "@/app/components/Toast";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";

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

// Illustration Component
function DashboardIllustration({ isAdmin, userName }: { isAdmin: boolean; userName?: string }) {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 blur-3xl"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl shadow-yellow-500/30 mb-4">
          <Car className="w-16 h-16 text-black" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {isAdmin ? "Welcome Back!" : `Welcome, ${userName || "User"}!`}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {isAdmin ? "Manage your operations efficiently" : "Your personal dashboard"}
          </p>
        </div>
      </div>
    </div>
  );
}

// Empty State Illustration
function EmptyStateIllustration({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center mb-4">
        <Activity className="w-12 h-12 text-gray-400 dark:text-gray-500" />
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{message}</p>
    </div>
  );
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const { trigger } = useToast();
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Only fetch admin stats if user is admin
        if (isAdmin) {
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
        } else {
          // For regular users, we can fetch their personal data
          // For now, set empty stats
          setStats(null);
          setRecentActivity([]);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        trigger("error", "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchDashboardData();
    }
  }, [trigger, isAdmin, session]);

  const formatStats = (stats: DashboardStats) => [
    {
      title: "Total Drivers",
      value: stats.totalDrivers.toLocaleString(),
      icon: Users,
      change: stats.driversChange,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Pending Approvals",
      value: stats.pendingApprovals.toString(),
      icon: Clock,
      change: stats.approvalsChange,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Active Trips",
      value: stats.activeTrips.toString(),
      icon: Car,
      change: stats.tripsChange,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Completed Trips",
      value: stats.completedTrips.toLocaleString(),
      icon: CheckCircle,
      change: stats.completedChange,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(isAdmin ? 4 : 2)].map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 animate-pulse"
            >
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For non-admin users, show user dashboard
  if (!isAdmin) {
    return (
      <>
        <Toast />
        <div className="space-y-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <DashboardIllustration isAdmin={false} userName={session?.user?.name} />
          </motion.div>

          {/* Quick Actions for Users */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/dashboard/newsletter"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Newsletter
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stay updated with our latest news
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-yellow-600 dark:text-yellow-400 group-hover:gap-2 transition-all">
                Subscribe now
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/dashboard/profile-setup"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Complete Profile
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Help us get to know you better
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                Fill out form
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Get Started
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete your profile to get personalized recommendations
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Stay Informed
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Subscribe to our newsletter for updates and exclusive offers
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Your Requests
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                View and manage your service requests from your profile
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Admin dashboard (existing code)
  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-4">
            <Activity className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Unable to Load Dashboard
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Please refresh the page or try again later.
          </p>
        </div>
      </div>
    );
  }

  const formattedStats = formatStats(stats);

  return (
    <>
      <Toast />
      <div className="space-y-8">
        {/* Welcome Section with Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <DashboardIllustration isAdmin={true} />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formattedStats.map((stat, index) => {
            const Icon = stat.icon;
            const isPositive = stat.change > 0;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  {isPositive ? (
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1">
                  <span
                    className={`text-sm font-semibold ${
                      isPositive
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {stat.change.toFixed(1)}%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    vs last month
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <Activity className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Activity
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Latest updates and actions
                </p>
              </div>
            </div>
            <Link
              href="/dashboard/activity"
              className="text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-6">
            {recentActivity.length === 0 ? (
              <EmptyStateIllustration message="No recent activity to display" />
            ) : (
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {activity.driver}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.action}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {activity.time}
                      </p>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          activity.status === "Success"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                            : activity.status === "Pending"
                              ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"
                              : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/dashboard/approvals"
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Pending Approvals
                </h4>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.pendingApprovals}
                </p>
              </div>
            </div>
            <div className="flex items-center text-sm text-yellow-600 dark:text-yellow-400 group-hover:gap-2 transition-all">
              Review now
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/dashboard/clients"
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Total Clients
                </h4>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalDrivers}
                </p>
              </div>
            </div>
            <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
              View all clients
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/dashboard/analytics"
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Active Trips
                </h4>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.activeTrips}
                </p>
              </div>
            </div>
            <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
              View analytics
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
