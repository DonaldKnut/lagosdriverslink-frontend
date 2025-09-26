"use client";

import Link from "next/link";
import { LockKeyhole, Mail, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/components/Toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { trigger } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      trigger("success", "Logged in successfully!");
      router.push("/dashboard");
    } else {
      trigger("error", "Invalid email or password.");
    }

    setIsLoading(false);
  };

  return (
    <div className="text-white w-full max-w-md mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <LockKeyhole className="h-10 w-10 text-yellow-400" />
        </div>
        <h2 className="text-3xl font-extrabold text-yellow-200">
          Welcome Back
        </h2>
        <p className="text-yellow-300 mt-1 text-sm">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm text-yellow-300">Email</span>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-black border border-yellow-700 rounded-lg py-3 pl-10 pr-4 text-yellow-100 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm text-yellow-300">Password</span>
            <div className="relative mt-1">
              <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full bg-black border border-yellow-700 rounded-lg py-3 pl-10 pr-12 text-yellow-100 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Eye className="h-5 w-5 text-yellow-500" />
                )}
              </button>
            </div>
          </label>
        </div>

        <div className="flex items-center justify-between text-sm text-yellow-300">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-yellow-600 rounded bg-black"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <Link
            href="/auth/forgot-password"
            className="text-yellow-300 hover:text-yellow-200"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing in...
            </span>
          ) : (
            "Sign in"
          )}
        </button>

        <p className="text-sm text-center text-yellow-400 mt-4">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-medium text-yellow-300 hover:text-yellow-200 underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
