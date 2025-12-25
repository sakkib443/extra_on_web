"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Globe, Image as ImageIcon, FileText, Palette, Code } from "lucide-react";

export default function CreatePlatformPage() {
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: "",
        icon: "",
        logo: "",
        website: "",
        color: "#66B3FF",
        status: "active",
        version: "",
        documentation: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const statusOptions = ["active", "inactive", "deprecated"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "name") {
            const slug = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
            setFormData(prev => ({ ...prev, slug }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log("Platform Data:", formData);
        alert("Platform created successfully!");
        setIsSubmitting(false);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/admin/platforms"
                    className="p-2.5 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100/50 text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-outfit">Create New Platform</h1>
                    <p className="text-gray-500 mt-1 font-poppins">Add a new development platform</p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        Platform Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Platform Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="e.g., WordPress, React, Next.js"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Slug <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                required
                                placeholder="wordpress"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Current Version
                            </label>
                            <input
                                type="text"
                                name="version"
                                value={formData.version}
                                onChange={handleChange}
                                placeholder="e.g., 6.4, 18.2.0"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Status <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            >
                                {statusOptions.map(s => (
                                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Icon Name <span className="text-gray-400 text-xs">(Lucide icon)</span>
                            </label>
                            <input
                                type="text"
                                name="icon"
                                value={formData.icon}
                                onChange={handleChange}
                                placeholder="e.g., code, globe, layout"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        Links & Resources
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Official Website
                            </label>
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="https://wordpress.org"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Documentation URL
                            </label>
                            <input
                                type="url"
                                name="documentation"
                                value={formData.documentation}
                                onChange={handleChange}
                                placeholder="https://developer.wordpress.org"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Logo URL
                            </label>
                            <input
                                type="url"
                                name="logo"
                                value={formData.logo}
                                onChange={handleChange}
                                placeholder="https://example.com/platform-logo.svg"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Appearance */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <Palette className="w-5 h-5 text-primary" />
                        Appearance
                    </h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                            Brand Color
                        </label>
                        <div className="flex items-center gap-3">
                            <input
                                type="color"
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                className="w-12 h-12 rounded-xl border-0 cursor-pointer"
                            />
                            <input
                                type="text"
                                value={formData.color}
                                onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                                className="w-32 px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Description
                    </h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                            Platform Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Describe this platform and what it's best used for..."
                            className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"
                        />
                    </div>
                </div>

                {/* Preview Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6">Preview</h2>

                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: formData.color }}
                        >
                            <Globe className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 font-outfit">{formData.name || "Platform Name"}</h3>
                            <p className="text-sm text-gray-500 font-poppins">
                                {formData.description?.slice(0, 50) || "Platform description..."}
                                {formData.description?.length > 50 ? "..." : ""}
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-xs text-gray-400 font-poppins">v{formData.version || "0.0.0"}</span>
                                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${formData.status === "active" ? "bg-green-100 text-green-700" :
                                        formData.status === "deprecated" ? "bg-red-100 text-red-700" :
                                            "bg-gray-100 text-gray-700"
                                    }`}>
                                    {formData.status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    <Link
                        href="/dashboard/admin/platforms"
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium font-poppins"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secendery text-white rounded-xl text-sm font-medium font-outfit hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Creating...
                            </>
                        ) : (
                            <>
                                <Save className="w-5 h-5" />
                                Create Platform
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
