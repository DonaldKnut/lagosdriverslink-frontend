"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Car,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";
import { useToast, Toast } from "@/app/components/Toast";
import { motion } from "framer-motion";

interface AnalyticsData {
  revenue: {
    total: number;
    change: number;
    chart: { date: string; value: number }[];
  };
  users: {
    total: number;
    change: number;
    chart: { date: string; value: number }[];
  };
  trips: {
    total: number;
    change: number;
    chart: { date: string; value: number }[];
  };
  topServices: { name: string; count: number; revenue: number }[];
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("30d");
  const { trigger } = useToast();

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        // TODO: Replace with actual API endpoint
        // Mock data for now
        const mockData: AnalyticsData = {
          revenue: {
            total: 2450000,
            change: 12.5,
            chart: [],
          },
          users: {
            total: 1234,
            change: 8.3,
            chart: [],
          },
          trips: {
            total: 4567,
            change: 15.2,
            chart: [],
          },
          topServices: [
            { name: "Daily Driver", count: 450, revenue: 13500000 },
            { name: "Weekday Driver", count: 320, revenue: 56000000 },
            { name: "Full Week Driver", count: 280, revenue: 63000000 },
            { name: "VIP Spy Police", count: 120, revenue: 33000000 },
          ],
        };
        setAnalytics(mockData);
      } catch (error) {
        console.error("Error fetching analytics:", error);
        trigger("error", "Failed to load analytics");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [trigger, timeRange]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 animate-pulse"
            >
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            Unable to load analytics data
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Toast />
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Insights and performance metrics
            </p>
          </div>
          <div className="flex gap-2">
            {["7d", "30d", "90d", "1y"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                  timeRange === range
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              {analytics.revenue.change > 0 ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-500" />
              )}
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total Revenue
            </h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              ₦{analytics.revenue.total.toLocaleString()}
            </p>
            <p
              className={`text-sm font-semibold ${
                analytics.revenue.change > 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {analytics.revenue.change > 0 ? "+" : ""}
              {analytics.revenue.change.toFixed(1)}% vs last period
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              {analytics.users.change > 0 ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-500" />
              )}
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total Users
            </h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {analytics.users.total.toLocaleString()}
            </p>
            <p
              className={`text-sm font-semibold ${
                analytics.users.change > 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {analytics.users.change > 0 ? "+" : ""}
              {analytics.users.change.toFixed(1)}% vs last period
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Car className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              {analytics.trips.change > 0 ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-500" />
              )}
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total Trips
            </h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {analytics.trips.total.toLocaleString()}
            </p>
            <p
              className={`text-sm font-semibold ${
                analytics.trips.change > 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {analytics.trips.change > 0 ? "+" : ""}
              {analytics.trips.change.toFixed(1)}% vs last period
            </p>
          </motion.div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Revenue Trend
              </h2>
            </div>
            <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Chart visualization will be displayed here
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <PieChart className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Service Distribution
              </h2>
            </div>
            <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Chart visualization will be displayed here
              </p>
            </div>
          </motion.div>
        </div>

        {/* Top Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Top Services
            </h2>
          </div>
          <div className="space-y-4">
            {analytics.topServices.map((service, index) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {service.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.count} bookings
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">
                    ₦{service.revenue.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Revenue
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

