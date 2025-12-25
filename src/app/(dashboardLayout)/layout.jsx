"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    Tag,
    Globe,
    Users,
    BarChart3,
    TrendingUp,
    Menu,
    X,
    Shield,
    LogOut,
    Bell,
    Search,
    User,
    CreditCard,
    ChevronDown,
    Plus,
    List,
    Home,
    ExternalLink,
    Monitor
} from "lucide-react";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const pathname = usePathname();

    const toggleDropdown = (name) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const navigation = [
        { name: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
        {
            name: "Websites",
            icon: Package,
            isDropdown: true,
            children: [
                { name: "All Websites", href: "/dashboard/admin/websites", icon: List },
                { name: "Create Website", href: "/dashboard/admin/websites/create", icon: Plus },
            ]
        },
        {
            name: "Software",
            icon: Monitor,
            isDropdown: true,
            children: [
                { name: "All Software", href: "/dashboard/admin/software", icon: List },
                { name: "Create Software", href: "/dashboard/admin/software/create", icon: Plus },
            ]
        },
        {
            name: "Categories",
            icon: Tag,
            isDropdown: true,
            children: [
                { name: "All Categories", href: "/dashboard/admin/categories", icon: List },
                { name: "Create Category", href: "/dashboard/admin/categories/create", icon: Plus },
            ]
        },
        {
            name: "Platforms",
            icon: Globe,
            isDropdown: true,
            children: [
                { name: "All Platforms", href: "/dashboard/admin/platforms", icon: List },
                { name: "Create Platform", href: "/dashboard/admin/platforms/create", icon: Plus },
            ]
        },
        { name: "Users", href: "/dashboard/admin/users", icon: Users },
        { name: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
        { name: "Reports", href: "/dashboard/admin/reports", icon: TrendingUp },
    ];

    const settingsNav = [
        { name: "Profile", href: "/dashboard/admin/profile", icon: User },
        { name: "Notifications", href: "/dashboard/admin/notifications", icon: Bell },
        { name: "Security", href: "/dashboard/admin/security", icon: Shield },
        { name: "Billing", href: "/dashboard/admin/billing", icon: CreditCard },
    ];

    const isActiveLink = (href) => {
        return pathname === href || pathname.startsWith(href + "/");
    };

    const isDropdownActive = (children) => {
        return children.some(child => isActiveLink(child.href));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 flex font-poppins">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Fixed on desktop with elegant light design */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col overflow-hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {/* Sidebar Background - Light Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/95 to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secendery/5"></div>
                <div className="absolute inset-0 border-r border-gray-200/60"></div>

                {/* Decorative Elements */}
                <div className="absolute top-32 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-32 -left-20 w-48 h-48 bg-secendery/10 rounded-full blur-3xl"></div>

                {/* Sidebar Content */}
                <div className="relative flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100 flex-shrink-0 bg-white/50 backdrop-blur-sm">
                        <Link href="/dashboard/admin" className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-gradient-to-br from-primary to-secendery rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <span className="text-lg font-outfit font-bold bg-gradient-to-r from-primary to-secendery bg-clip-text text-transparent">ExtrainWeb</span>
                                <p className="text-xs text-gray-500">Admin Panel</p>
                            </div>
                        </Link>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Back to Home */}
                    <div className="px-4 pt-4">
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-xl transition-all group"
                        >
                            <Home className="h-4 w-4" />
                            <span className="text-sm font-medium">Back to Home</span>
                            <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="px-4 py-3">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Main Menu</p>
                        <div className="space-y-1">
                            {navigation.map((item) => {
                                if (item.isDropdown) {
                                    const isActive = isDropdownActive(item.children);
                                    const isOpen = openDropdowns[item.name] || isActive;

                                    return (
                                        <div key={item.name}>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${isActive
                                                    ? "bg-gradient-to-r from-primary/10 to-secendery/10 text-gray-900"
                                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-gray-400"}`} />
                                                    {item.name}
                                                </div>
                                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${isActive ? "text-primary" : "text-gray-400"}`} />
                                            </button>

                                            {/* Dropdown Items */}
                                            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                                    {item.children.map((child) => {
                                                        const childActive = isActiveLink(child.href);
                                                        return (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${childActive
                                                                    ? "bg-gradient-to-r from-primary to-secendery text-white shadow-md shadow-primary/25"
                                                                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                                                    }`}
                                                                onClick={() => setSidebarOpen(false)}
                                                            >
                                                                <child.icon className={`h-4 w-4 ${childActive ? "text-white" : "text-gray-400"}`} />
                                                                {child.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                const isActive = isActiveLink(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 group ${isActive
                                            ? "bg-gradient-to-r from-primary to-secendery text-white shadow-lg shadow-primary/25"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secendery/10"
                                            }`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-400 group-hover:text-primary"}`} />
                                        {item.name}
                                        {isActive && (
                                            <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Settings Section */}
                        <div className="mt-6">
                            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Settings</p>
                            <div className="space-y-1">
                                {settingsNav.map((item) => {
                                    const isActive = isActiveLink(item.href);
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 group ${isActive
                                                ? "bg-gradient-to-r from-primary to-secendery text-white shadow-lg shadow-primary/25"
                                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                                }`}
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <item.icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-400 group-hover:text-primary"}`} />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </nav>

                    {/* Sidebar Footer - Sticky at bottom */}
                    <div className="p-4 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-secendery/5 hover:from-primary/10 hover:to-secendery/10 transition-colors">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secendery rounded-full flex items-center justify-center ring-2 ring-white shadow-md">
                                <span className="text-white text-sm font-bold font-outfit">A</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate font-outfit">Admin User</p>
                                <p className="text-xs text-gray-500 truncate">admin@extraweb.com</p>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                <LogOut className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main content area - with left margin for fixed sidebar */}
            <div className="flex-1 flex flex-col min-h-screen lg:ml-72">
                {/* Top bar */}
                <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 flex-shrink-0 shadow-sm">
                    <div className="flex items-center justify-between h-20 px-4 lg:px-8">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2.5 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                            >
                                <Menu className="h-5 w-5" />
                            </button>

                            {/* Search Bar */}
                            <div className="hidden md:flex items-center">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-11 pr-4 py-3 w-80 bg-gray-100/80 border-0 rounded-2xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Notification Bell */}
                            <Link href="/dashboard/admin/notifications" className="relative p-2.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-gradient-to-r from-primary to-secendery rounded-full ring-2 ring-white"></span>
                            </Link>

                            {/* User Avatar (mobile) */}
                            <Link href="/dashboard/admin/profile" className="lg:hidden w-10 h-10 bg-gradient-to-br from-primary to-secendery rounded-full flex items-center justify-center ring-2 ring-white shadow-lg">
                                <span className="text-white text-xs font-bold font-outfit">A</span>
                            </Link>

                            {/* Welcome Text (desktop) */}
                            <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-gray-200">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-gray-900 font-outfit">Welcome back!</p>
                                    <p className="text-xs text-gray-500">Admin User</p>
                                </div>
                                <Link href="/dashboard/admin/profile" className="w-12 h-12 bg-gradient-to-br from-primary to-secendery rounded-full flex items-center justify-center ring-2 ring-white shadow-lg shadow-primary/30">
                                    <span className="text-white text-sm font-bold font-outfit">A</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-4 lg:p-8 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
