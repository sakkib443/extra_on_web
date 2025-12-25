"use client";
import { useState } from "react";
import { Bell, Mail, Smartphone, Globe, MessageSquare, ShoppingCart, AlertCircle, Check, X } from "lucide-react";

const notificationItems = [
    { id: 1, type: "order", title: "New order received", message: "Order #12345 has been placed", time: "5 min ago", read: false },
    { id: 2, type: "user", title: "New user registered", message: "John Doe created an account", time: "15 min ago", read: false },
    { id: 3, type: "alert", title: "System update available", message: "Version 2.1.0 is ready to install", time: "1 hour ago", read: true },
    { id: 4, type: "message", title: "New message", message: "You have a message from support", time: "2 hours ago", read: true },
    { id: 5, type: "order", title: "Payment received", message: "Payment for order #12340 completed", time: "3 hours ago", read: true },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(notificationItems);
    const [settings, setSettings] = useState({
        emailOrders: true,
        emailUsers: true,
        emailAlerts: false,
        pushOrders: true,
        pushUsers: false,
        pushAlerts: true,
        smsOrders: false,
        smsAlerts: true,
    });

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id) => {
        setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, read: true } : n)
        );
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const deleteNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const getIcon = (type) => {
        switch (type) {
            case "order": return ShoppingCart;
            case "user": return Globe;
            case "alert": return AlertCircle;
            case "message": return MessageSquare;
            default: return Bell;
        }
    };

    const getIconColor = (type) => {
        switch (type) {
            case "order": return "bg-green-100 text-green-600";
            case "user": return "bg-blue-100 text-blue-600";
            case "alert": return "bg-amber-100 text-amber-600";
            case "message": return "bg-purple-100 text-purple-600";
            default: return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Notifications</h1>
                    <p className="text-gray-500 mt-1">
                        You have <span className="text-blue-600 font-semibold">{unreadCount}</span> unread notifications
                    </p>
                </div>
                <button
                    onClick={markAllAsRead}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                >
                    <Check className="w-4 h-4" />
                    Mark All as Read
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Notifications List */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-4 border-b border-gray-100">
                            <h3 className="font-semibold text-gray-900">Recent Notifications</h3>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {notifications.map((notification) => {
                                const IconComponent = getIcon(notification.type);
                                return (
                                    <div
                                        key={notification.id}
                                        className={`p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors ${!notification.read ? "bg-blue-50/50" : ""
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColor(notification.type)}`}>
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <p className={`font-medium ${!notification.read ? "text-gray-900" : "text-gray-700"}`}>
                                                        {notification.title}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-0.5">{notification.message}</p>
                                                </div>
                                                <span className="text-xs text-gray-400 whitespace-nowrap">{notification.time}</span>
                                            </div>
                                            <div className="flex items-center gap-3 mt-2">
                                                {!notification.read && (
                                                    <button
                                                        onClick={() => markAsRead(notification.id)}
                                                        className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                                                    >
                                                        Mark as read
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deleteNotification(notification.id)}
                                                    className="text-xs text-gray-400 hover:text-red-500"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                        {!notification.read && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit">
                    <h3 className="font-semibold text-gray-900 mb-6">Notification Settings</h3>

                    <div className="space-y-6">
                        {/* Email Notifications */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="w-4 h-4 text-gray-500" />
                                <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                            </div>
                            <div className="space-y-3 pl-6">
                                {[
                                    { key: "emailOrders", label: "New orders" },
                                    { key: "emailUsers", label: "User registrations" },
                                    { key: "emailAlerts", label: "System alerts" },
                                ].map((item) => (
                                    <label key={item.key} className="flex items-center justify-between cursor-pointer">
                                        <span className="text-sm text-gray-600">{item.label}</span>
                                        <button
                                            onClick={() => setSettings(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                            className={`relative w-10 h-5 rounded-full transition-colors ${settings[item.key] ? "bg-blue-500" : "bg-gray-300"
                                                }`}
                                        >
                                            <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform shadow ${settings[item.key] ? "left-5" : "left-0.5"
                                                }`} />
                                        </button>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Push Notifications */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Bell className="w-4 h-4 text-gray-500" />
                                <span className="text-sm font-medium text-gray-700">Push Notifications</span>
                            </div>
                            <div className="space-y-3 pl-6">
                                {[
                                    { key: "pushOrders", label: "New orders" },
                                    { key: "pushUsers", label: "User registrations" },
                                    { key: "pushAlerts", label: "System alerts" },
                                ].map((item) => (
                                    <label key={item.key} className="flex items-center justify-between cursor-pointer">
                                        <span className="text-sm text-gray-600">{item.label}</span>
                                        <button
                                            onClick={() => setSettings(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                            className={`relative w-10 h-5 rounded-full transition-colors ${settings[item.key] ? "bg-blue-500" : "bg-gray-300"
                                                }`}
                                        >
                                            <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform shadow ${settings[item.key] ? "left-5" : "left-0.5"
                                                }`} />
                                        </button>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* SMS Notifications */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Smartphone className="w-4 h-4 text-gray-500" />
                                <span className="text-sm font-medium text-gray-700">SMS Notifications</span>
                            </div>
                            <div className="space-y-3 pl-6">
                                {[
                                    { key: "smsOrders", label: "New orders" },
                                    { key: "smsAlerts", label: "Critical alerts" },
                                ].map((item) => (
                                    <label key={item.key} className="flex items-center justify-between cursor-pointer">
                                        <span className="text-sm text-gray-600">{item.label}</span>
                                        <button
                                            onClick={() => setSettings(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                            className={`relative w-10 h-5 rounded-full transition-colors ${settings[item.key] ? "bg-blue-500" : "bg-gray-300"
                                                }`}
                                        >
                                            <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform shadow ${settings[item.key] ? "left-5" : "left-0.5"
                                                }`} />
                                        </button>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
