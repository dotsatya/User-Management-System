"use client";

import { validateField } from "@/lib/validation";
import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  address: string;
};

type PopupEditProps = {
  userId: number;
  onClose: () => void;
  onUpdated: () => void;
};

const PopupEdit = ({ userId, onClose, onUpdated }: PopupEditProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState({
    phone: "",
    address: "",
    dob: "",
    gender: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/getuser/${userId}`,
          {
            withCredentials: true,
          },
        );

        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userId]);

  const handleChange = (field: keyof User, value: string) => {
    if (!user) return;

    setUser({
      ...user,
      [field]: value,
    });
  };

  const handleSave = async () => {
    if (!user) return;
    setError({ phone: "", address: "", dob: "", gender: "" });

    const newErrors = {
      phone: validateField("phone", user.phone),
      address: validateField("address", user.address),
      dob: validateField("dob", user.dob),
      gender: validateField("gender", user.gender),
    };

    setError(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }
    try {
      setSaving(true);

      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getuser/${userId}/edit`,
        {
          phone: user.phone,
          address: user.address,
          dob: user.dob,
          gender: user.gender,
        },
        {
          withCredentials: true,
        },
      );

      onUpdated();
      onClose();
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="rounded-xl bg-white p-6">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Edit User</h2>

            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>

            <input
              value={user.name}
              disabled
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>

            <input
              value={user.email}
              disabled
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-gray-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-700">Phone</label>

            <input
              value={user.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={  () => {
                setError((prevErrors) => ({
                  ...prevErrors,
                  phone: validateField("phone", user.phone),
                }));
              }}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-black"
            />

            {error.phone && <p className="text-red-500">{error.phone}</p>}
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
            </label>

            <input
              type="date"
              value={user.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              onBlur={  () => {
                setError((prevErrors) => ({
                  ...prevErrors,
                  dob: validateField("dob", user.dob),
                }));
              }}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-black"
            />

            {error.dob && <p className="text-red-500">{error.dob}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-medium text-gray-700">Gender</label>

            <select
              value={user.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              onBlur={  () => {
                setError((prevErrors) => ({
                  ...prevErrors,
                  gender: validateField("gender", user.gender),
                }));
              }}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-black"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {error.gender && <p className="text-red-500">{error.gender}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="text-sm font-medium text-gray-700">Address</label>

            <textarea
              value={user.address}
              onChange={(e) => handleChange("address", e.target.value)}
              onBlur={  () => {
                setError((prevErrors) => ({
                  ...prevErrors,
                  address: validateField("address", user.address),
                }));
              }}
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-black"
            />

            {error.address && <p className="text-red-500">{error.address}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupEdit;
