"use client";
import { useState } from "react";
import { User, Mail, Phone, MapPin, Camera, Save, Calendar, Edit, Shield, CreditCard, Star, ShoppingBag } from "lucide-react";

export default function UserProfilePage() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">My Profile</h1>
                    <p className="text-gray-500 mt-1">Manage your personal information</p>
                </div>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                >
                    <Edit className="w-4 h-4" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden">
                    <div className="h-28 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 relative">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
                    </div>
                    <div className="px-6 pb-6">
                        <div className="relative -mt-14 mb-4">
                            <div className="w-28 h-28 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-lg shadow-purple-500/30">
                                JD
                            </div>
                            {isEditing && (
                                <button className="absolute bottom-0 right-0 p-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity">
                                    <Camera className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
                        <p className="text-gray-500 mb-4">Premium Member</p>

                        <div className="space-y-3 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-purple-500" />
                                <span className="text-gray-600">john.doe@example.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-purple-500" />
                                <span className="text-gray-600">+1 234 567 890</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-purple-500" />
                                <span className="text-gray-600">New York, USA</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Calendar className="w-4 h-4 text-purple-500" />
                                <span className="text-gray-600">Joined January 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Form */}
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input
                                type="text"
                                defaultValue="John"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${isEditing ? "bg-gray-100/80 border-0" : "bg-gray-50 text-gray-500 border border-gray-200"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                defaultValue="Doe"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${isEditing ? "bg-gray-100/80 border-0" : "bg-gray-50 text-gray-500 border border-gray-200"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                defaultValue="john.doe@example.com"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${isEditing ? "bg-gray-100/80 border-0" : "bg-gray-50 text-gray-500 border border-gray-200"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                defaultValue="+1 234 567 890"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${isEditing ? "bg-gray-100/80 border-0" : "bg-gray-50 text-gray-500 border border-gray-200"
                                    }`}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <input
                                type="text"
                                defaultValue="123 Main Street, New York, NY 10001"
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${isEditing ? "bg-gray-100/80 border-0" : "bg-gray-50 text-gray-500 border border-gray-200"
                                    }`}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                            <textarea
                                rows="3"
                                defaultValue="Web developer and designer passionate about creating beautiful user experiences."
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all ${isEditing ? "bg-gray-100/80 border-0" : "bg-gray-50 text-gray-500 border border-gray-200"
                                    }`}
                            />
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end gap-3">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-5 py-2.5 text-gray-600 hover:text-gray-800 text-sm font-medium"
                            >
                                Cancel
                            </button>
                            <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Account Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">12</p>
                            <p className="text-sm text-gray-500">Purchases</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">5</p>
                            <p className="text-sm text-gray-500">Reviews</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-green-600">Active</p>
                            <p className="text-sm text-gray-500">Account Status</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-pink-600">Premium</p>
                            <p className="text-sm text-gray-500">Membership</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
