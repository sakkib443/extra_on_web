"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Plus, X, Save, Image as ImageIcon, Tag, Globe, DollarSign, Star, Calendar, Code, FileText } from "lucide-react";

export default function CreateWebsitePage() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        platform: "",
        projectType: "",
        accessType: "Paid",
        category: "",
        subCategory: "",
        price: "",
        offerPrice: "",
        description: "",
        features: [""],
        technologies: [""],
        image: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const platforms = ["WordPress", "React", "Next.js", "Vue.js", "Angular", "HTML/CSS", "PHP", "Laravel", "MERN"];
    const projectTypes = ["Ecommerce", "Blog", "Portfolio", "Business", "Landing Page", "Dashboard", "SaaS", "Educational"];
    const categories = ["Business", "Magazine", "WooCommerce", "Technology", "Educational", "Portfolio", "Marketing", "Entertainment"];
    const accessTypes = ["Free", "Paid", "Freemium"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (index, field, value) => {
        setFormData(prev => {
            const newArray = [...prev[field]];
            newArray[index] = value;
            return { ...prev, [field]: newArray };
        });
    };

    const addArrayItem = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], ""]
        }));
    };

    const removeArrayItem = (index, field) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log("Form Data:", formData);
        alert("Website created successfully!");
        setIsSubmitting(false);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/admin/websites"
                    className="p-2.5 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100/50 text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-outfit">Create New Website</h1>
                    <p className="text-gray-500 mt-1 font-poppins">Add a new website template to your collection</p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Basic Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Website Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Avada | Website Builder For WordPress"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Author Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                required
                                placeholder="e.g., ThemeFusion"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Platform <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="platform"
                                value={formData.platform}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            >
                                <option value="">Select Platform</option>
                                {platforms.map(p => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Project Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            >
                                <option value="">Select Project Type</option>
                                {projectTypes.map(p => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Access Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="accessType"
                                value={formData.accessType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            >
                                {accessTypes.map(a => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Category & Subcategory */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-primary" />
                        Category & Classification
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            >
                                <option value="">Select Category</option>
                                {categories.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Sub Category
                            </label>
                            <input
                                type="text"
                                name="subCategory"
                                value={formData.subCategory}
                                onChange={handleChange}
                                placeholder="e.g., Corporate, Agency"
                                className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        Pricing Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Regular Price ($) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    placeholder="69"
                                    className="w-full pl-8 pr-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                                Offer Price ($) <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                <input
                                    type="number"
                                    name="offerPrice"
                                    value={formData.offerPrice}
                                    onChange={handleChange}
                                    min="0"
                                    placeholder="49"
                                    className="w-full pl-8 pr-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                />
                            </div>
                            {formData.price && formData.offerPrice && (
                                <p className="text-xs text-green-600 mt-2 font-poppins">
                                    Discount: {Math.round((1 - formData.offerPrice / formData.price) * 100)}% off
                                </p>
                            )}
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
                            Website Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Write a compelling description for your website template..."
                            className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"
                        />
                    </div>
                </div>

                {/* Features */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Features
                    </h2>

                    <div className="space-y-3">
                        {formData.features.map((feature, index) => (
                            <div key={index} className="flex gap-3">
                                <input
                                    type="text"
                                    value={feature}
                                    onChange={(e) => handleArrayChange(index, "features", e.target.value)}
                                    placeholder={`Feature ${index + 1} (e.g., Drag & Drop Builder)`}
                                    className="flex-1 px-4 py-3 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                />
                                {formData.features.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem(index, "features")}
                                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addArrayItem("features")}
                            className="inline-flex items-center gap-2 px-4 py-2.5 text-primary hover:bg-primary/10 rounded-xl text-sm font-medium transition-colors font-poppins"
                        >
                            <Plus className="w-4 h-4" />
                            Add Feature
                        </button>
                    </div>
                </div>

                {/* Technologies */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        Technologies Used
                    </h2>

                    <div className="space-y-3">
                        {formData.technologies.map((tech, index) => (
                            <div key={index} className="flex gap-3">
                                <input
                                    type="text"
                                    value={tech}
                                    onChange={(e) => handleArrayChange(index, "technologies", e.target.value)}
                                    placeholder={`Technology ${index + 1} (e.g., React, Node.js)`}
                                    className="flex-1 px-4 py-3 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                />
                                {formData.technologies.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem(index, "technologies")}
                                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addArrayItem("technologies")}
                            className="inline-flex items-center gap-2 px-4 py-2.5 text-primary hover:bg-primary/10 rounded-xl text-sm font-medium transition-colors font-poppins"
                        >
                            <Plus className="w-4 h-4" />
                            Add Technology
                        </button>
                    </div>
                </div>

                {/* Image Upload */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-primary" />
                        Preview Image
                    </h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                            Image URL <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            required
                            placeholder="https://example.com/preview-image.jpg"
                            className="w-full px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                        />

                        {formData.image && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-500 mb-2 font-poppins">Preview:</p>
                                <div className="w-full max-w-md h-48 rounded-xl overflow-hidden bg-gray-100">
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    <Link
                        href="/dashboard/admin/websites"
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
                                Create Website
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
