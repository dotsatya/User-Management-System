"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
    dob: string;
    gender: string;
    username: string;
  } | null>(null);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/userdata`,
          {
            withCredentials: true,
          },
        );

        // console.log("User data:", userData.data);

        setUser(userData.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

  

    getUser();
  }, []);

  return (
     <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">MyDashboard</h1>
          </div>

          <div className="relative">
            {loading && <div>Loading...</div>}
            {!loading && user && (
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <span className="font-medium text-gray-700">{user.name}</span>
              </button>
            )}

            {showProfile && (
              <div className="absolute right-0 top-12 z-10 w-48 rounded-xl  bg-white p-2 shadow-lg text-black   ">
                <button onClick={()=>{
                  router.push("/user/editProfile")
                }}
                 className="w-full rounded-lg px-4 py-2 text-left text-sm hover:bg-gray-100">
                  Edit Profile
                </button>

                <button className="w-full rounded-lg px-4 py-2 text-left text-sm hover:bg-gray-100">
                  Settings
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full rounded-lg px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <section
        className="mx-auto max-w-7xl px-6 py-10"
        onClick={() => setShowProfile(false)}
      >
        {loading && (
          <div className="flex items-center justify-center py-10">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
          </div>
        )}

        {!loading && user && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome back, {user.name}
            </h2>

            <p className="mt-2 text-gray-500">
              Here is your account information.
            </p>

            <div className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2">
              {/* Username */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Username</p>
                <p className="mt-1 text-base font-medium text-gray-900">
                  {user.username}
                </p>
              </div>

              {/* Email */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Email</p>
                <p className="mt-1 text-base font-medium text-gray-900">
                  {user.email}
                </p>
              </div>

              {/* Phone */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="mt-1 text-base font-medium text-gray-900">
                  {user.phone}
                </p>
              </div>

              {/* Date of Birth */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="mt-1 text-base font-medium text-gray-900">
                  {user.dob}
                </p>
              </div>

              {/* Gender */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Gender</p>
                <p className="mt-1 text-base font-medium capitalize text-gray-900">
                  {user.gender}
                </p>
              </div>

              {/* Address */}
              <div className="border-b border-gray-200 pb-4 sm:col-span-2">
                <p className="text-sm text-gray-500">Address</p>
                <p className="mt-1 text-base font-medium text-gray-900">
                  {user.address}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      
    </main>
  );
}
