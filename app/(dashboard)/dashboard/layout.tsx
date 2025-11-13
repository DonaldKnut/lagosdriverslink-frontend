"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  UserCircle,
  LogOut,
  Settings,
  Menu,
  X,
  ShieldCheck,
  Users,
  BarChart3,
  FileText,
  Bell,
  Search,
  Mail,
  UserPlus,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useToast, Toast } from "@/app/components/Toast";

const adminNavItems = [
  { name: "Overview", href: "/dashboard", icon: Home },
  {
    name: "My Profile",
    href: "/dashboard/profile",
    icon: UserCircle,
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: Users,
  },
  {
    name: "Approvals",
    href: "/dashboard/approvals",
    icon: ShieldCheck,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const userNavItems = [
  { name: "Overview", href: "/dashboard", icon: Home },
  {
    name: "My Profile",
    href: "/dashboard/profile",
    icon: UserCircle,
  },
  {
    name: "Newsletter",
    href: "/dashboard/newsletter",
    icon: Mail,
  },
  {
    name: "Profile Setup",
    href: "/dashboard/profile-setup",
    icon: UserPlus,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { trigger } = useToast();
  const { data: session } = useSession();
  
  const isAdmin = session?.user?.role === "admin";
  const navItems = isAdmin ? adminNavItems : userNavItems;

  // Auto-close sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/auth/login" });
      trigger("success", "Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      trigger("error", "Failed to log out. Please try again.");
    }
  };

  return (
    <>
      <Toast />
      <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-72" : "w-20"
          } bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col shadow-xl z-40 ${
            !sidebarOpen && "lg:block"
          } ${mobileMenuOpen ? "fixed inset-y-0 left-0 lg:relative" : "hidden lg:flex"}`}
        >
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              {sidebarOpen ? (
                <Link href="/" className="flex items-center w-[140px] h-[60px] relative">
                  <Image
                    src="/ldl_logo.png"
                    alt="Lagos Drivers Link"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
              ) : (
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">LDL</span>
                </div>
              )}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:flex hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle sidebar"
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      isActive ? "text-black" : "text-gray-500 dark:text-gray-400"
                    }`}
                  />
                  {sidebarOpen && (
                    <span
                      className={`font-medium ${
                        isActive ? "text-black" : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {item.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 ${
                sidebarOpen ? "justify-start" : "justify-center"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-sm">
                  {session?.user?.name?.charAt(0).toUpperCase() || "A"}
                </span>
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {session?.user?.name || "User"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {session?.user?.email || "user@example.com"}
                  </p>
                  {isAdmin && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded">
                      Admin
                    </span>
                  )}
                </div>
              )}
            </div>
            <button
              onClick={handleLogout}
              className={`w-full mt-3 flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors ${
                sidebarOpen ? "justify-start" : "justify-center"
              }`}
            >
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium">Logout</span>}
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
              <div className="hidden md:flex items-center gap-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dashboard..."
                  className="bg-transparent border-none outline-none text-gray-600 dark:text-gray-300 placeholder-gray-400 w-64"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6 lg:p-8">
            {children}
          </main>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
}
