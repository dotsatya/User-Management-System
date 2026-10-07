"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateField } from "@/lib/validation";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "Admin@123";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const newErrors = {
      email: validateField("email", email),
      password: validateField("password", password),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    setLoading(true);

    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      router.push("/admin/dashboard");
      return;
    }

    setError("Invalid email or password");
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] dark:border-gray-800 dark:bg-[#111111]"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Log in to continue to the admin dashboard
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email address
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) =>
              setErrors((prev) => ({
                ...prev,
                email: validateField("email", e.target.value),
              }))
            }
            className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none transition
            placeholder:text-gray-400
            hover:border-gray-400
            focus:border-black focus:ring-4 focus:ring-black/10
            dark:border-gray-700 dark:text-white dark:placeholder:text-gray-500
            dark:hover:border-gray-600
            dark:focus:border-white dark:focus:ring-white/10"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
          </div>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) =>
              setErrors((prev) => ({
                ...prev,
                password: validateField("password", e.target.value),
              }))
            }
            className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none transition
            placeholder:text-gray-400
            hover:border-gray-400
            focus:border-black focus:ring-4 focus:ring-black/10
            dark:border-gray-700 dark:text-white dark:placeholder:text-gray-500
            dark:hover:border-gray-600
            dark:focus:border-white dark:focus:ring-white/10"
            required
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Login button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-200
          hover:-translate-y-0.5 hover:bg-gray-800
          active:translate-y-0 active:scale-[0.99]
          disabled:cursor-not-allowed disabled:translate-y-0
          disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none
          dark:bg-white dark:text-black
          dark:hover:bg-gray-200
          dark:disabled:bg-gray-800 dark:disabled:text-gray-500"
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

      </form>
    </main>
  );
}
