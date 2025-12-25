"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, X, Plus, Monitor } from "lucide-react";

export default function CreateSoftwarePage() {
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        developer: "",
        category: "",
        license: "Free",
        version: "",
        price: 0,
        description: "",
        platform: [],
        requirements: {
            os: "",
            ram: "",
            storage: "",
            processor: ""
        },
        features: [""],
        image: "",
        gallery: [""]
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const categories = [
        "Development",
        "Design",
        "Productivity",
        "Communication",
        "Security",
        "Utilities",
        "Entertainment",
        "Education"
    ];

    const platforms = ["Windows", "macOS", "Linux", "iOS", "Android", "Web"];
    const licenses = ["Free", "Freemium", "Paid", "Open Source"];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRequirementChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            requirements: {
                ...prev.requirements,
                [field]: value
            }
        }));
    };

    const handlePlatformToggle = (platform) => {
        setFormData(prev => ({
            ...prev,
            platform: prev.platform.includes(platform)
                ? prev.platform.filter(p => p !== platform)
                : [...prev.platform, platform]
        }));
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = value;
        setFormData(prev => ({ ...prev, features: newFeatures }));
    };

    const addFeature = () => {
        setFormData(prev => ({ ...prev, features: [...prev.features, ""] }));
    };

    const removeFeature = (index) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index)
        }));
    };

    const handleGalleryChange = (index, value) => {
        const newGallery = [...formData.gallery];
        newGallery[index] = value;
        setFormData(prev => ({ ...prev, gallery: newGallery }));
    };

    const addGalleryImage = () => {
        setFormData(prev => ({ ...prev, gallery: [...prev.gallery, ""] }));
    };

    const removeGalleryImage = (index) => {
        setFormData(prev => ({
            ...prev,
            gallery: prev.gallery.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Handle form submission
        console.log("Form Data:", formData);
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Software created successfully!");
        }, 1500);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/admin/software"
                    className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-outfit">Add New Software</h1>
                    <p className="text-gray-500 mt-1 font-poppins">Create a new software product</p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6 flex items-center gap-2">
                        <Monitor className="w-5 h-5 text-primary" />
                        Basic Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Software Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="e.g., Visual Studio Code"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Slug *</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                required
                                placeholder="e.g., visual-studio-code"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Developer *</label>
                            <input
                                type="text"
                                name="developer"
                                value={formData.developer}
                                onChange={handleInputChange}
                                required
                                placeholder="e.g., Microsoft"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Version *</label>
                            <input
                                type="text"
                                name="version"
                                value={formData.version}
                                onChange={handleInputChange}
                                required
                                placeholder="e.g., 1.85.0"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Category *</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            >
                                <option value="">Select Category</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">License *</label>
                            <select
                                name="license"
                                value={formData.license}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            >
                                {licenses.map(license => (
                                    <option key={license} value={license}>{license}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                min="0"
                                placeholder="0 for free"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Main Image URL *</label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                required
                                placeholder="https://..."
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Description *</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            placeholder="Describe the software..."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Platforms */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6">Supported Platforms</h2>
                    <div className="flex flex-wrap gap-3">
                        {platforms.map(platform => (
                            <button
                                key={platform}
                                type="button"
                                onClick={() => handlePlatformToggle(platform)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${formData.platform.includes(platform)
                                        ? "bg-gradient-to-r from-primary to-secendery text-white shadow-md"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {platform}
                            </button>
                        ))}
                    </div>
                </div>

                {/* System Requirements */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6">System Requirements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Operating System</label>
                            <input
                                type="text"
                                value={formData.requirements.os}
                                onChange={(e) => handleRequirementChange("os", e.target.value)}
                                placeholder="e.g., Windows 10+"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">RAM</label>
                            <input
                                type="text"
                                value={formData.requirements.ram}
                                onChange={(e) => handleRequirementChange("ram", e.target.value)}
                                placeholder="e.g., 4 GB"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Storage</label>
                            <input
                                type="text"
                                value={formData.requirements.storage}
                                onChange={(e) => handleRequirementChange("storage", e.target.value)}
                                placeholder="e.g., 500 MB"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Processor</label>
                            <input
                                type="text"
                                value={formData.requirements.processor}
                                onChange={(e) => handleRequirementChange("processor", e.target.value)}
                                placeholder="e.g., 1.6 GHz"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6">Key Features</h2>
                    <div className="space-y-3">
                        {formData.features.map((feature, index) => (
                            <div key={index} className="flex gap-3">
                                <input
                                    type="text"
                                    value={feature}
                                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                                    placeholder="Enter feature..."
                                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                {formData.features.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeFeature(index)}
                                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addFeature}
                            className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-xl transition-colors font-medium text-sm"
                        >
                            <Plus className="w-4 h-4" />
                            Add Feature
                        </button>
                    </div>
                </div>

                {/* Gallery */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 font-outfit mb-6">Image Gallery</h2>
                    <div className="space-y-3">
                        {formData.gallery.map((url, index) => (
                            <div key={index} className="flex gap-3">
                                <input
                                    type="url"
                                    value={url}
                                    onChange={(e) => handleGalleryChange(index, e.target.value)}
                                    placeholder="Image URL..."
                                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                {formData.gallery.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeGalleryImage(index)}
                                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addGalleryImage}
                            className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-xl transition-colors font-medium text-sm"
                        >
                            <Plus className="w-4 h-4" />
                            Add Image
                        </button>
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-end gap-4">
                    <Link
                        href="/dashboard/admin/software"
                        className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium rounded-xl transition-colors font-poppins"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-gradient-to-r from-primary to-secendery text-white font-medium rounded-xl hover:opacity-90 transition-all disabled:opacity-50 font-outfit flex items-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Creating...
                            </>
                        ) : (
                            <>
                                <Upload className="w-5 h-5" />
                                Create Software
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
