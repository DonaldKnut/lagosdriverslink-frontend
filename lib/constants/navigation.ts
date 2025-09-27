import { Home, Users, User, Phone } from "lucide-react";

export const navigationLinks = [
  { name: "Home", href: "/", icon: Home, size: 18 },
  { name: "Drivers", href: "/operators", icon: Users, size: 18 },
  { name: "Recruit", href: "/recruit", icon: User, size: 18 },
  { name: "Contact", href: "/contact", icon: Phone, size: 18 },
] as const;

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
] as const;

export const protectedRoutes = ["/dashboard"] as const;

export type NavigationLink = (typeof navigationLinks)[number];
export type AuthRoute = (typeof authRoutes)[number];
export type ProtectedRoute = (typeof protectedRoutes)[number];


