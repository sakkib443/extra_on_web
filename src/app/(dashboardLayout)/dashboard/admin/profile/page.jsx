"use client";
import { useState } from "react";
import { User, Mail, Phone, MapPin, Camera, Save, Calendar, Briefcase } from "lucide-react";

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Profile</h1>
                    <p className="text-gray-500 mt-1">Manage your personal information</p>
                </div>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                >
                    {isEditing ? "Cancel" : "Edit Profile"}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="px-6 pb-6">
                        <div className="relative -mt-12 mb-4">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold border-4 border-white shadow-lg">
                                A
                            </div>
                            {isEditing && (
                                <button className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors">
                                    <Camera className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Admin User</h3>
                        <p className="text-gray-500 mb-4">System Administrator</p>

                        <div className="space-y-3 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">admin@extraweb.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">+1 234 567 890</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">New York, USA</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">Joined January 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Form */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input
                                type="text"
                                defaultValue="Admin"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isEditing ? "bg-gray-50 border-0" : "bg-gray-100 text-gray-500"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                defaultValue="User"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isEditing ? "bg-gray-50 border-0" : "bg-gray-100 text-gray-500"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                defaultValue="admin@extraweb.com"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isEditing ? "bg-gray-50 border-0" : "bg-gray-100 text-gray-500"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                defaultValue="+1 234 567 890"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isEditing ? "bg-gray-50 border-0" : "bg-gray-100 text-gray-500"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                            <input
                                type="text"
                                defaultValue="System Administrator"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isEditing ? "bg-gray-50 border-0" : "bg-gray-100 text-gray-500"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <input
                                type="text"
                                defaultValue="New York, USA"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isEditing ? "bg-gray-50 border-0" : "bg-gray-100 text-gray-500"
                                    }`}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                            <textarea
                                rows="4"
                                defaultValue="Experienced system administrator with expertise in web development and platform management. Passionate about creating seamless user experiences."
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${isEditing ? "bg-gray-50 border-0" : "bg-gray-100 text-gray-500"
                                    }`}
                            />
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end gap-3">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2.5 text-gray-600 hover:text-gray-800 text-sm font-medium"
                            >
                                Cancel
                            </button>
                            <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Activity Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">156</p>
                            <p className="text-sm text-gray-500">Total Actions</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <User className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">24</p>
                            <p className="text-sm text-gray-500">Users Managed</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">365</p>
                            <p className="text-sm text-gray-500">Days Active</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                            <Mail className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">89</p>
                            <p className="text-sm text-gray-500">Messages Sent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
