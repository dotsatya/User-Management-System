"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateField } from "@/lib/validation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    username: "",
    dob: "",
    gender: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", name),
      phone: validateField("phone", phone),
      username: validateField("username", username),
      dob: validateField("dob", dob),
      gender: validateField("gender", gender),
      address: validateField("address", address),
      email: validateField("email", email),
      password: validateField("password", password),
      confirmPassword: validateField(
        "confirmPassword",
        confirmPassword,
        password,
      ),
    };

    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      console.log("Fill the valid details.");
      return;
    }

    try {
      const signupData = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
          phone,
          address,
          username,
          dob,
          gender,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Signup successful:", signupData.data);

      router.push("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          setErrors((prev) => ({
            ...prev,
            email: error.response?.data?.message,
          }));
        }
      }
    }
  };
  const updateError = (field: keyof typeof errors, value: string) => {
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const inputClass = (field: keyof typeof errors) =>
    `w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-gray-900
    outline-none transition-all duration-200
    placeholder:text-gray-400
    dark:text-white dark:placeholder:text-gray-500
    ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
        : "border-gray-300 hover:border-gray-400 focus:border-black focus:ring-4 focus:ring-black/10 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:border-white dark:focus:ring-white/10"
    }`;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900 dark:bg-[#0a0a0a] dark:text-white sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Enter your details to get started.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] dark:border-gray-800 dark:bg-[#111111] sm:p-8"
        >
          {/* Personal Information */}
          <div className="mb-7">
            <div className="mb-5">
              <h2 className="text-lg font-semibold">Personal information</h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Tell us a little about yourself.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={(e) => updateError("name", e.target.value)}
                  className={inputClass("name")}
                />

                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Username */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="user_name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={(e) => updateError("username", e.target.value)}
                  className={inputClass("username")}
                />

                {errors.username && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.username}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => updateError("email", e.target.value)}
                  className={inputClass("email")}
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone number
                </label>

                <input
                  type="tel"
                  placeholder="8954555523"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={(e) => updateError("phone", e.target.value)}
                  className={inputClass("phone")}
                />

                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* DOB */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Date of birth
                </label>

                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  onBlur={(e) => updateError("dob", e.target.value)}
                  className={inputClass("dob")}
                />

                {errors.dob && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.dob}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-medium">Gender</label>

                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  onBlur={(e) => updateError("gender", e.target.value)}
                  className={inputClass("gender")}
                >
                  <option value="" className="bg-black text-white">
                    Select gender
                  </option>
                  <option value="male" className="bg-black text-white">
                    Male
                  </option>
                  <option value="female" className="bg-black text-white">
                    Female
                  </option>
                  <option value="other" className="bg-black text-white">
                    Other
                  </option>
                  <option
                    value="prefer_not_to_say"
                    className="bg-black text-white"
                  >
                    Prefer not to say
                  </option>
                </select>

                {errors.gender && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.gender}</p>
                )}
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Address
                </label>

                <textarea
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onBlur={(e) => updateError("address", e.target.value)}
                  rows={3}
                  className={`${inputClass("address")} resize-none`}
                />

                {errors.address && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.address}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="border-t border-gray-200 pt-7 dark:border-gray-800">
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={(e) => updateError("password", e.target.value)}
                  className={inputClass("password")}
                />

                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Confirm password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={(e) => updateError("confirmPassword", e.target.value)}
                  className={inputClass("confirmPassword")}
                />

                {errors.confirmPassword && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white
                shadow-lg shadow-black/10 transition-all duration-200
                hover:-translate-y-0.5 hover:bg-gray-800
                active:translate-y-0 active:scale-[0.99]
                dark:bg-white dark:text-black
                dark:hover:bg-gray-200"
            >
              Create Account
            </button>

            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="font-semibold text-black hover:underline dark:text-white"
              >
                Log in
              </button>
            </p>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          By creating an account, you agree to our terms and privacy policy.
        </p>
      </div>
    </main>
  );
}
