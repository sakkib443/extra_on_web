"use client";
import { useState } from "react";
import { HelpCircle, MessageSquare, Book, Video, ChevronDown, ChevronUp, Search, Send, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react";

const faqs = [
    { id: 1, question: "How do I download my purchased templates?", answer: "After purchasing, go to your Dashboard > Downloads page. All your purchased files will be available there with the most recent versions." },
    { id: 2, question: "Can I use the templates for client projects?", answer: "Yes! With a regular license, you can use templates for personal and client projects. For multiple client uses, consider our extended license." },
    { id: 3, question: "How long do I have access to updates?", answer: "You have lifetime access to updates for all purchased templates. New versions are automatically available in your Downloads section." },
    { id: 4, question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for bulk purchases." },
    { id: 5, question: "How do I get a refund?", answer: "If you're not satisfied with your purchase, contact support within 30 days. We'll review your request and process refunds for eligible cases." },
];

const supportTickets = [
    { id: "TKT-001", subject: "Installation help needed", status: "open", date: "2025-12-22", lastReply: "Support Team" },
    { id: "TKT-002", subject: "License activation issue", status: "resolved", date: "2025-12-18", lastReply: "John Doe" },
];

const resources = [
    { id: 1, title: "Getting Started Guide", description: "Learn the basics of using our templates", icon: Book, color: "from-blue-500 to-cyan-500" },
    { id: 2, title: "Video Tutorials", description: "Step-by-step video instructions", icon: Video, color: "from-purple-500 to-pink-500" },
    { id: 3, title: "Documentation", description: "Detailed documentation for all products", icon: Book, color: "from-amber-500 to-orange-500" },
];

export default function SupportPage() {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Help & Support</h1>
                    <p className="text-gray-500 mt-1">Get help with your account and purchases</p>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                    <Plus className="w-4 h-4" />
                    New Support Ticket
                </button>
            </div>

            {/* Quick Help Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-3xl p-8 text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h2 className="text-2xl font-bold mb-2">How can we help you?</h2>
                    <p className="text-white/80 mb-6">Search our knowledge base or contact our support team</p>
                    <div className="relative max-w-lg mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for help..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-white/30"
                        />
                    </div>
                </div>
            </div>

            {/* Resources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resources.map((resource) => {
                    const IconComponent = resource.icon;
                    return (
                        <div key={resource.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                            <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <IconComponent className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">{resource.title}</h3>
                            <p className="text-sm text-gray-500">{resource.description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* FAQs */}
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h3 className="font-bold text-gray-900">Frequently Asked Questions</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {filteredFaqs.map((faq) => (
                            <div key={faq.id} className="p-4">
                                <button
                                    className="w-full flex items-center justify-between text-left"
                                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                >
                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                    {expandedFaq === faq.id ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                {expandedFaq === faq.id && (
                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support Tickets */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden h-fit">
                    <div className="p-6 border-b border-gray-100">
                        <h3 className="font-bold text-gray-900">Your Tickets</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        {supportTickets.map((ticket) => (
                            <div key={ticket.id} className="p-4 bg-gradient-to-r from-gray-50 to-purple-50/50 rounded-xl">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h4 className="font-medium text-gray-900 text-sm">{ticket.subject}</h4>
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${ticket.status === 'open'
                                            ? 'bg-amber-100 text-amber-700'
                                            : 'bg-green-100 text-green-700'
                                        }`}>
                                        {ticket.status === 'open' ? 'Open' : 'Resolved'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                    <span>{ticket.id}</span>
                                    <span>•</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{new Date(ticket.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className="w-full py-3 text-sm text-purple-600 hover:text-purple-700 font-medium">
                            View All Tickets
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Box */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Still need help?</h4>
                            <p className="text-sm text-gray-600">Our support team is available 24/7 to assist you.</p>
                        </div>
                    </div>
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                        <Send className="w-4 h-4" />
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
}
