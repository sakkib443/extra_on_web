"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    FaStar,
    FaDownload,
    FaHeart,
    FaShare,
    FaEye,
    FaCode,
    FaRocket,
    FaCheck,
    FaArrowLeft,
    FaGlobe,
    FaMobileAlt,
    FaDesktop,
    FaApple,
    FaAndroid,
    FaShieldAlt,
    FaBolt,
    FaUsers,
    FaMemory,
    FaHdd,
    FaMicrochip,
    FaExternalLinkAlt
} from "react-icons/fa";

export default function SoftwareDetailsPage() {
    const params = useParams();
    const [software, setSoftware] = useState(null);
    const [allSoftware, setAllSoftware] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/software.json");
                const data = await res.json();
                setAllSoftware(data);
                const found = data.find(s => s.slug === params.slug);
                setSoftware(found);
            } catch (error) {
                console.error("Error fetching software:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [params.slug]);

    const getPlatformIcon = (platform) => {
        if (platform.includes("Windows") || platform.includes("Linux")) return <FaDesktop className="text-sm" />;
        if (platform.includes("macOS") || platform.includes("iOS")) return <FaApple className="text-sm" />;
        if (platform.includes("Android")) return <FaAndroid className="text-sm" />;
        if (platform.includes("Web")) return <FaGlobe className="text-sm" />;
        return <FaDesktop className="text-sm" />;
    };

    const relatedSoftware = allSoftware.filter(s =>
        s.category === software?.category && s.id !== software?.id
    ).slice(0, 4);

    const favoriteClass = isFavorite
        ? 'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-poppins font-medium transition-all border bg-red-50 text-red-600 border-red-200 shadow-sm'
        : 'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-poppins font-medium transition-all border bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:shadow-sm';

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex justify-center items-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
                    <p className="text-gray-600 font-poppins font-medium">Loading software details...</p>
                </div>
            </div>
        );
    }

    // Not found state
    if (!software) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
                <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaCode className="text-red-500 text-2xl" />
                    </div>
                    <h2 className="text-2xl font-outfit font-bold text-gray-800 mb-2">Software not found!</h2>
                    <p className="text-gray-600 font-poppins mb-6">The software you're looking for doesn't exist.</p>
                    <Link href="/softwere" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-poppins font-medium hover:bg-secendery transition-all duration-300 shadow-lg hover:shadow-xl">
                        <FaArrowLeft /> Go back to software
                    </Link>
                </div>
            </div>
        );
    }

    // Mock gallery images
    const galleryImages = software.screenshots || [software.image, software.image, software.image];

    return (
        <div className="min-h-screen bg-gray-50 font-poppins">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <Link href="/softwere" className="inline-flex items-center gap-3 text-primary hover:text-blue-700 transition-all duration-300 font-poppins font-medium text-lg group">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <FaArrowLeft className="text-sm" />
                        </div>
                        Back to Software
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT SECTION - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Hero Image Gallery */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="relative">
                                <img
                                    src={galleryImages[activeImage]}
                                    alt={software.name}
                                    className="w-full h-[400px] object-cover"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className={`px-4 py-2 backdrop-blur-sm text-sm font-bold rounded-full shadow-lg ${software.license === "Free" ? "bg-green-500/90 text-white" :
                                            software.license === "Freemium" ? "bg-blue-500/90 text-white" :
                                                "bg-amber-500/90 text-white"
                                        }`}>
                                        {software.license}
                                    </span>
                                    <span className="px-4 py-2 bg-black/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                        {software.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <button
                                        onClick={() => setIsFavorite(!isFavorite)}
                                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
                                    >
                                        <FaHeart className={`${isFavorite ? 'text-red-500' : 'text-gray-600 hover:text-red-500'} transition-colors`} />
                                    </button>
                                </div>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="p-4 border-t border-gray-100">
                                <div className="flex gap-3 overflow-x-auto">
                                    {galleryImages.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImage(index)}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeImage === index ? 'border-primary shadow-lg' : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: FaHeart, value: software.reviews.toLocaleString(), label: 'Reviews', color: 'text-red-500' },
                                { icon: FaDownload, value: software.downloads, label: 'Downloads', color: 'text-blue-500' },
                                { icon: FaStar, value: software.rating, label: 'Rating', color: 'text-yellow-500' },
                                { icon: FaEye, value: software.size, label: 'Size', color: 'text-green-500' }
                            ].map((stat, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                    <div className="flex items-center justify-between mb-2">
                                        <stat.icon className={`text-2xl ${stat.color} group-hover:scale-110 transition-transform`} />
                                        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                                    </div>
                                    <p className="text-2xl font-outfit font-bold text-gray-800 mb-1">{stat.value}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-poppins font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced Description */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <FaCode className="text-primary text-lg" />
                                    </div>
                                    <h2 className="text-2xl font-outfit font-bold text-gray-800">About {software.name}</h2>
                                </div>
                                <p className="text-gray-600 font-poppins text-lg leading-relaxed mb-6">{software.description}</p>

                                {/* Key Highlights */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                        <FaRocket className="text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-outfit font-semibold text-gray-800 mb-1">High Performance</h3>
                                            <p className="text-sm text-gray-600 font-poppins">Optimized for speed and efficiency</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                        <FaMobileAlt className="text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-outfit font-semibold text-gray-800 mb-1">Cross Platform</h3>
                                            <p className="text-sm text-gray-600 font-poppins">Works on multiple operating systems</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* System Requirements */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <FaMicrochip className="text-primary text-lg" />
                                    </div>
                                    <h2 className="text-2xl font-outfit font-bold text-gray-800">System Requirements</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
                                            <FaDesktop className="text-primary text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Operating System</p>
                                            <p className="text-gray-800 font-semibold mt-1">{software.requirements.os}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
                                            <FaMemory className="text-primary text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Memory (RAM)</p>
                                            <p className="text-gray-800 font-semibold mt-1">{software.requirements.ram}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
                                            <FaHdd className="text-primary text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Storage Space</p>
                                            <p className="text-gray-800 font-semibold mt-1">{software.requirements.storage}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
                                            <FaMicrochip className="text-primary text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Processor</p>
                                            <p className="text-gray-800 font-semibold mt-1">{software.requirements.processor}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE CARD - Download Section */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 sticky top-6 overflow-hidden">
                            {/* Header */}
                            <div className="p-6 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                        <FaGlobe className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-outfit font-bold text-gray-900 leading-tight">{software.name}</h1>
                                        <p className="text-sm text-gray-500 font-poppins">by <span className="font-semibold text-primary">{software.developer}</span></p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`text-sm ${i < Math.floor(software.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600 font-medium">{software.rating} ({software.reviews.toLocaleString()} reviews)</span>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="p-6 bg-primary/5">
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 font-poppins font-bold uppercase mb-2">
                                        {software.price === 0 ? "Free Download" : "Price"}
                                    </p>
                                    <h2 className="text-5xl font-outfit font-black text-primary mb-1">
                                        {software.price === 0 ? "Free" : `$${software.price}`}
                                    </h2>
                                    {software.price > 0 && (
                                        <p className="text-sm text-gray-500 font-poppins">per month</p>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-6 space-y-4">
                                <a
                                    href={software.downloadLink}
                                    className="w-full bg-primary hover:bg-secendery text-white py-4 rounded-xl font-outfit font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <FaDownload /> Download Now
                                </a>

                                <div className="flex gap-3">
                                    <button onClick={() => setIsFavorite(!isFavorite)} className={favoriteClass}>
                                        <FaHeart className="text-sm" /> {isFavorite ? 'Saved' : 'Save'}
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-poppins font-medium bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                                        <FaShare className="text-sm" /> Share
                                    </button>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="px-6 pb-6 space-y-6">
                                {/* Meta Info */}
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <p className="text-gray-500 font-poppins font-medium mb-1">Version</p>
                                        <p className="font-outfit font-semibold text-gray-800">{software.version}</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <p className="text-gray-500 font-poppins font-medium mb-1">Size</p>
                                        <p className="font-outfit font-semibold text-gray-800">{software.size}</p>
                                    </div>
                                </div>

                                {/* Platforms */}
                                <div>
                                    <h3 className="font-outfit font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <FaDesktop className="text-primary" />
                                        Supported Platforms
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {software.platform.map((plat, index) => (
                                            <span key={index} className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-poppins font-medium border border-primary/20 hover:shadow-sm transition-shadow">
                                                {getPlatformIcon(plat)} {plat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h3 className="font-outfit font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <FaCheck className="text-green-500" />
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {software.features?.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm text-gray-600 font-poppins">
                                                <FaCheck className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Visit Website */}
                                <a
                                    href={software.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-poppins font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
                                >
                                    Visit Website <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-3 bg-green-50 rounded-xl">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                        <FaShieldAlt className="text-green-600 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Virus Free</p>
                                        <p className="text-xs text-gray-500">Verified & Secure</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <FaBolt className="text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Fast Download</p>
                                        <p className="text-xs text-gray-500">High-speed servers</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-xl">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <FaUsers className="text-purple-600 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{software.downloads}</p>
                                        <p className="text-xs text-gray-500">Trusted by millions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Software */}
                {relatedSoftware.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-outfit font-bold text-gray-800 mb-6">Related Software</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedSoftware.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/softwere/${item.slug}`}
                                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative h-40 bg-gray-100 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2 py-1 rounded-md text-xs font-bold ${item.license === "Free" ? "bg-green-500 text-white" :
                                                    item.license === "Freemium" ? "bg-blue-500 text-white" : "bg-amber-500 text-white"
                                                }`}>{item.license}</span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-outfit font-bold text-gray-900 group-hover:text-primary transition-colors">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.developer}</p>
                                        <div className="flex items-center gap-2 mt-3">
                                            <FaStar className="text-yellow-400 text-sm" />
                                            <span className="text-sm font-semibold">{item.rating}</span>
                                            <span className="text-sm text-gray-400">•</span>
                                            <span className="text-sm text-gray-500">{item.downloads}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
