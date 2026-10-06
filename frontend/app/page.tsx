"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    localStorage.setItem("adminEmail", "admin@gmail.com");
    localStorage.setItem("adminPassword", "Admin@123");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            User Management
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            User Management System
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-400">
            A simple dashboard for users and administrators to manage profiles,
            accounts, and registered users.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/login"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              Create Account
            </Link>
          </div>
        </section>

        {/* Dashboard Cards */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {/* User Dashboard */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl dark:bg-gray-800">
              👤
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              User Dashboard
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              View and manage your personal account information, profile,
              contact details, and other account settings.
            </p>

            <Link
              href="/dashboard"
              className="mt-6 inline-block text-sm font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Open User Dashboard →
            </Link>
          </div>

          {/* Admin Dashboard */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl dark:bg-gray-800">
              🛡️
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Admin Dashboard
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Manage registered users, view user information, and perform
              administrative operations.
            </p>
          </div>

          {/* User Management */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl dark:bg-gray-800">
              👥
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              User Management
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              View all registered users and manage their account information
              from the administration panel.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 dark:border-gray-800">
        <p className="text-center text-sm text-gray-500">
          © 2026 User Management System
        </p>
      </footer>
    </div>
  );
}
