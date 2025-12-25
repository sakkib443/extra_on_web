"use client";
import { useState } from "react";
import { Search, Plus, Edit, Trash2, MoreVertical, Mail, Shield, User, UserCheck, UserX, Filter } from "lucide-react";

const usersData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", avatar: "J", joined: "2024-01-15", purchases: 12 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", avatar: "J", joined: "2024-02-20", purchases: 8 },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Active", avatar: "M", joined: "2024-03-10", purchases: 5 },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "Moderator", status: "Active", avatar: "S", joined: "2024-04-05", purchases: 15 },
    { id: 5, name: "David Brown", email: "david@example.com", role: "User", status: "Inactive", avatar: "D", joined: "2024-05-18", purchases: 3 },
    { id: 6, name: "Emily Davis", email: "emily@example.com", role: "User", status: "Active", avatar: "E", joined: "2024-06-22", purchases: 7 },
    { id: 7, name: "Alex Turner", email: "alex@example.com", role: "User", status: "Banned", avatar: "A", joined: "2024-07-30", purchases: 0 },
    { id: 8, name: "Lisa Anderson", email: "lisa@example.com", role: "User", status: "Active", avatar: "L", joined: "2024-08-12", purchases: 10 },
];

const roleColors = {
    Admin: "bg-purple-100 text-purple-700",
    Moderator: "bg-blue-100 text-blue-700",
    User: "bg-gray-100 text-gray-700"
};

const statusColors = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-yellow-100 text-yellow-700",
    Banned: "bg-red-100 text-red-700"
};

export default function UsersPage() {
    const [users] = useState(usersData);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRole, setSelectedRole] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");

    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = selectedRole === "all" || user.role === selectedRole;
        const matchesStatus = selectedStatus === "all" || user.status === selectedStatus;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const stats = {
        total: users.length,
        active: users.filter(u => u.status === "Active").length,
        inactive: users.filter(u => u.status === "Inactive").length,
        admins: users.filter(u => u.role === "Admin").length
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Users</h1>
                    <p className="text-gray-500 mt-1">Manage all registered users</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                    <Plus className="w-4 h-4" />
                    Add User
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                            <p className="text-sm text-gray-500">Total Users</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <UserCheck className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
                            <p className="text-sm text-gray-500">Active</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <UserX className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stats.inactive}</p>
                            <p className="text-sm text-gray-500">Inactive</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Shield className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stats.admins}</p>
                            <p className="text-sm text-gray-500">Admins</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Roles</option>
                        <option value="Admin">Admin</option>
                        <option value="Moderator">Moderator</option>
                        <option value="User">User</option>
                    </select>
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Banned">Banned</option>
                    </select>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">User</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Role</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Joined</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Purchases</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                                                {user.avatar}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{user.name}</p>
                                                <p className="text-sm text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${roleColors[user.role]}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${statusColors[user.status]}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-600">
                                        {new Date(user.joined).toLocaleDateString()}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="font-medium text-gray-900">{user.purchases}</span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Mail className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
