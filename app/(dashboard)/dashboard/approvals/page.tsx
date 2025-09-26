"use client";

import {
  Check,
  X,
  Clock,
  AlertTriangle,
  User,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

import { useState, useEffect } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { SearchInput } from "@/app/components/ui/search-input";
import { useToast } from "@/app/components/Toast";

interface ApprovalRequest {
  id: string;
  user: string;
  type: string;
  date: string;
  status: "pending" | "approved" | "rejected";
  details: string;
  timestamp: string;
}

interface ApprovalStats {
  pending: number;
  approvedToday: number;
  rejectedToday: number;
}

export default function ApprovalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [approvalRequests, setApprovalRequests] = useState<ApprovalRequest[]>(
    []
  );
  const [stats, setStats] = useState<ApprovalStats | null>(null);
  const [loading, setLoading] = useState(true);
  const { trigger } = useToast();

  useEffect(() => {
    const fetchApprovalsData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/dashboard/approvals");

        if (!response.ok) {
          throw new Error("Failed to fetch approvals data");
        }

        const data = await response.json();
        setApprovalRequests(data.approvals);
        setStats(data.stats);
      } catch (error) {
        console.error("Error fetching approvals data:", error);
        trigger("error", "Failed to load approvals data");
      } finally {
        setLoading(false);
      }
    };

    fetchApprovalsData();
  }, [trigger]);

  const filteredRequests = approvalRequests.filter((request) => {
    const matchesSearch =
      request.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || request.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <Check className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <X className="h-4 w-4 text-red-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-64"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="p-4 animate-pulse">
              <div className="h-16 bg-gray-700 rounded"></div>
            </Card>
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
            Error Loading Approvals
          </h2>
          <p className="text-gray-300 mt-2">
            Unable to load approvals data. Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Approval Requests</h2>
          <p className="text-sm text-gray-400">
            Review and manage pending approvals
          </p>
        </div>
        <div className="flex gap-3">
          <SearchInput
            placeholder="Search requests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="relative">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="appearance-none bg-gray-800 border border-gray-700 rounded-md py-2 pl-3 pr-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Pending Approvals</p>
              <p className="text-2xl font-bold">{stats.pending}</p>
            </div>
            <div className="p-3 rounded-full bg-amber-500/10">
              <Clock className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Approved Today</p>
              <p className="text-2xl font-bold">{stats.approvedToday}</p>
            </div>
            <div className="p-3 rounded-full bg-green-500/10">
              <Check className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Rejected Today</p>
              <p className="text-2xl font-bold">{stats.rejectedToday}</p>
            </div>
            <div className="p-3 rounded-full bg-red-500/10">
              <X className="h-5 w-5 text-red-500" />
            </div>
          </div>
        </Card>
      </div>

      {/* Approval Requests Table */}
      <Card className="relative z-10">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Request ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Details</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    {request.user}
                  </div>
                </TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      request.status === "approved"
                        ? "success"
                        : request.status === "rejected"
                          ? "destructive"
                          : "warning"
                    }
                    className="flex items-center gap-1"
                  >
                    {getStatusIcon(request.status)}
                    {request.status.charAt(0).toUpperCase() +
                      request.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-400">
                  {request.details}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  {request.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 bg-green-600/10 hover:bg-green-600/20 border-green-600 text-green-400"
                      >
                        <Check className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 bg-red-600/10 hover:bg-red-600/20 border-red-600 text-red-400"
                      >
                        <X className="h-3 w-3 mr-1" />
                        Reject
                      </Button>
                    </>
                  )}
                  <Button size="sm" variant="outline" className="h-8">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
