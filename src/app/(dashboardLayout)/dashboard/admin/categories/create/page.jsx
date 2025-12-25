"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Tag, Image as ImageIcon, FileText, Palette } from "lucide-react";

export default function CreateCategoryPage() {
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: "",
        icon: "",
        image: "",
        color: "#66B3FF",
        parentCategory: "",
        status: "active"
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const parentCategories = ["Business", "E-commerce", "Blog", "Portfolio", "Technology", "Educational"];
    const statusOptions = ["active", "inactive", "draft"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate slug from name
        if (name === "name") {
            const slug = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
            setFormData(prev => ({ ...prev, slug }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log("Category Data:", formData);
        alert("Category created successfully!");
        setIsSubmitting(false);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/admin/categories"
                    className="p-2.5 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100/50 text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-outfit">Create New Category</h1>
                    <p className="text-gray-500 mt-1 font-poppins">Add a new category for organizing websites</p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-primary" />
                        Category Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Category Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Business Templates"
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
                                placeholder="business-templates"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                            <p className="text-xs text-gray-400 mt-1.5 font-poppins">Auto-generated from name</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Parent Category <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <select
                                name="parentCategory"
                                value={formData.parentCategory}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            >
                                <option value="">None (Top Level)</option>
                                {parentCategories.map(p => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
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
                                Icon Name <span className="text-gray-400 text-xs">(Lucide icon name)</span>
                            </label>
                            <input
                                type="text"
                                name="icon"
                                value={formData.icon}
                                onChange={handleChange}
                                placeholder="e.g., briefcase, shopping-cart"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                                    className="flex-1 px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Cover Image URL
                            </label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="https://example.com/category-image.jpg"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
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
                            Category Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Describe what types of websites belong in this category..."
                            className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"
                        />
                    </div>
                </div>

                {/* Preview Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6">Preview</h2>

                    <div
                        className="w-full max-w-sm p-6 rounded-2xl text-white"
                        style={{ background: `linear-gradient(135deg, ${formData.color}, ${formData.color}cc)` }}
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                            <Tag className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold font-outfit">{formData.name || "Category Name"}</h3>
                        <p className="text-white/80 text-sm mt-1 font-poppins">
                            {formData.description?.slice(0, 60) || "Category description..."}
                            {formData.description?.length > 60 ? "..." : ""}
                        </p>
                        <p className="text-white/60 text-xs mt-3 font-poppins">0 websites</p>
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    <Link
                        href="/dashboard/admin/categories"
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
                                Create Category
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
