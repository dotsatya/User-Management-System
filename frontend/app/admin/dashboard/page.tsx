"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EditIcon, TrashIcon } from "lucide-react";
import PopupEdit from "./PopupEdit";

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

const AdminPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/getallusers`,
          {
            withCredentials: true,
          },
        );

        console.log("Users:", response.data);

        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllUsers();
  }, []);

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

  const handleDelete = async (userId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getuser/${userId}/delete`,
        {
          withCredentials: true,
        },
      );
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

      alert("User deleted successfully.");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo / Title */}
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              User Management System
            </h1>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95"
          >
            Logout
          </button>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-10 ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>

          <p className="mt-2 text-gray-500">Manage all registered users.</p>
        </div>

        {/* All Users */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">All Users</h2>

              <p className="mt-1 text-sm text-gray-500">
                {users.length} registered user
                {users.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex items-center justify-center rounded-xl border border-gray-200 ">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="border-b border-gray-200 bg-gray-50">
                    <tr>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-700  text-center ">
                        ID
                      </th>

                      <th className="px-5 py-4 text-sm font-semibold text-gray-700 text-center">
                        Name
                      </th>

                      <th className="px-5 py-4 text-sm font-semibold text-gray-700 text-center">
                        Username
                      </th>

                      <th className="px-5 py-4 text-sm font-semibold text-gray-700 text-center">
                        Gender
                      </th>

                      <th className="px-5 py-4 text-sm font-semibold text-gray-700 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.length > 0 ? (
                      users.map((user: User, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                        >
                          {/* ID */}
                          <td className="px-5 py-4 text-sm text-gray-500 text-center">
                            {index + 1}
                          </td>

                          {/* Name */}
                          <td className="px-5 py-4 text-center">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                                {user.name.charAt(0).toUpperCase()}
                              </div>

                              <span className="font-medium text-gray-900">
                                {user.name}
                              </span>
                            </div>
                          </td>

                          {/* Username */}
                          <td className="px-5 py-4 text-sm text-gray-600 text-center">
                            @{user.username}
                          </td>

                          {/* Gender */}
                          <td className="px-5 py-4 text-sm text-gray-600 text-center">
                            {user.gender}
                          </td>

                          {/* Edit & Delete */}
                          <td className="px-5 py-4 flex flex-row justify-center">
                            <button
                              onClick={() => setSelectedUserId(user.id)}
                              className="inline-block rounded-lg px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200 active:scale-95"
                            >
                              <EditIcon size={20} />
                            </button>{" "}
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="inline-block rounded-lg px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200 active:scale-95"
                            >
                              <TrashIcon size={20} />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-5 py-10 text-center text-sm text-gray-500"
                        >
                          No users found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
      {selectedUserId !== null && (
        <PopupEdit
          userId={selectedUserId}
          onClose={() => setSelectedUserId(null)}
          onUpdated={() => {
            window.location.reload();
          }}
        />
      )}
    </main>
  );
};

export default AdminPage;
