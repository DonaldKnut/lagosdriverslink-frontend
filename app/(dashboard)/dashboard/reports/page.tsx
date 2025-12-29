"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Download,
  Calendar,
  Filter,
  Search,
  Printer,
  Mail,
  TrendingUp,
} from "lucide-react";
import { useToast, Toast } from "@/app/components/Toast";
import { motion } from "framer-motion";

interface Report {
  id: string;
  title: string;
  type: string;
  generatedAt: string;
  period: string;
  status: "ready" | "generating" | "failed";
  size: string;
}

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const { trigger } = useToast();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        // TODO: Replace with actual API endpoint
        const mockReports: Report[] = [
          {
            id: "1",
            title: "Monthly Revenue Report",
            type: "revenue",
            generatedAt: "2024-03-01T10:00:00Z",
            period: "February 2024",
            status: "ready",
            size: "2.4 MB",
          },
          {
            id: "2",
            title: "User Activity Report",
            type: "activity",
            generatedAt: "2024-03-01T09:30:00Z",
            period: "February 2024",
            status: "ready",
            size: "1.8 MB",
          },
          {
            id: "3",
            title: "Service Performance Report",
            type: "performance",
            generatedAt: "2024-02-28T15:00:00Z",
            period: "February 2024",
            status: "ready",
            size: "3.1 MB",
          },
          {
            id: "4",
            title: "Client Satisfaction Report",
            type: "satisfaction",
            generatedAt: "2024-02-28T12:00:00Z",
            period: "February 2024",
            status: "ready",
            size: "1.2 MB",
          },
        ];
        setReports(mockReports);
      } catch (error) {
        console.error("Error fetching reports:", error);
        trigger("error", "Failed to load reports");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [trigger]);

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || report.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleGenerateReport = () => {
    trigger("success", "Report generation started. You'll be notified when ready.");
  };

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
              Reports
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Generate and manage your reports
            </p>
          </div>
          <button
            onClick={handleGenerateReport}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Generate Report
          </button>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Reports
              </p>
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {reports.length}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                This Month
              </p>
              <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {reports.filter((r) => {
                const date = new Date(r.generatedAt);
                const now = new Date();
                return date.getMonth() === now.getMonth();
              }).length}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Ready
              </p>
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {reports.filter((r) => r.status === "ready").length}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Size
              </p>
              <Download className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {reports.reduce((acc, r) => {
                const size = parseFloat(r.size);
                return acc + size;
              }, 0).toFixed(1)} MB
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-12 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
              >
                <option value="all">All Types</option>
                <option value="revenue">Revenue</option>
                <option value="activity">Activity</option>
                <option value="performance">Performance</option>
                <option value="satisfaction">Satisfaction</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Reports List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Generated Reports
            </h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredReports.length === 0 ? (
              <div className="p-12 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  No reports found
                </p>
              </div>
            ) : (
              filteredReports.map((report) => (
                <div
                  key={report.id}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {report.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-1">
                          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {report.period}
                          </p>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {report.size}
                          </span>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              report.status === "ready"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                                : report.status === "generating"
                                  ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"
                                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400"
                            }`}
                          >
                            {report.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Printer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}





