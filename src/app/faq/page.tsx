"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import styles from './faq.module.css';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqs: FAQItem[] = [
    // Shipping & Delivery
    {
        category: "Shipping & Delivery",
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free shipping on all orders over ₹999. For orders below ₹999, a flat shipping fee of ₹99 applies."
    },
    {
        category: "Shipping & Delivery",
        question: "How long does delivery take?",
        answer: "Standard delivery takes 5-7 business days. Express delivery (2-3 business days) is available for an additional fee of ₹199."
    },
    {
        category: "Shipping & Delivery",
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within India. International shipping will be available soon!"
    },

    // Returns & Exchanges
    {
        category: "Returns & Exchanges",
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy. Items must be unworn, unwashed, and in original condition with tags attached. Refunds are processed within 7-10 business days."
    },
    {
        category: "Returns & Exchanges",
        question: "How do I initiate a return?",
        answer: "Go to your order history, select the item you want to return, and click 'Request Return'. Our team will arrange a pickup within 2-3 business days."
    },
    {
        category: "Returns & Exchanges",
        question: "Can I exchange an item for a different size?",
        answer: "Yes! You can exchange items for a different size or color within 30 days. Simply request an exchange from your order page."
    },

    // Sizing & Fit
    {
        category: "Sizing & Fit",
        question: "How do I find my size?",
        answer: "Each product page has a detailed size guide. You can also use our AI Size Finder tool which recommends the best size based on your measurements."
    },
    {
        category: "Sizing & Fit",
        question: "Do your clothes run true to size?",
        answer: "Most of our items run true to size. Check the product description for specific fit information (e.g., 'runs small', 'oversized fit'). Customer reviews also include fit feedback."
    },
    {
        category: "Sizing & Fit",
        question: "What if the size doesn't fit?",
        answer: "No worries! You can exchange for a different size within 30 days at no extra cost. We'll arrange a pickup and send you the new size."
    },

    // AI Stylist
    {
        category: "AI Stylist",
        question: "How does the AI Stylist work?",
        answer: "Our AI Stylist analyzes your style preferences, body type, and occasion to recommend personalized outfits. Simply upload a photo or answer a few questions to get started!"
    },
    {
        category: "AI Stylist",
        question: "Is the AI Stylist free?",
        answer: "Yes! The AI Stylist is completely free for all Fitloom customers. Premium features like unlimited outfit generations are available with Fitloom Premium."
    },
    {
        category: "AI Stylist",
        question: "Can I try clothes virtually?",
        answer: "Yes! Our Virtual Try-On feature lets you see how clothes look on you before buying. Just upload your photo and select any product to try it on virtually."
    },

    // Payment & Security
    {
        category: "Payment & Security",
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets (Paytm, PhonePe, Google Pay). Cash on Delivery is available for orders under ₹5000."
    },
    {
        category: "Payment & Security",
        question: "Is my payment information secure?",
        answer: "Absolutely! We use industry-standard SSL encryption and PCI-DSS compliant payment gateways. We never store your card details."
    },
    {
        category: "Payment & Security",
        question: "Can I use multiple payment methods?",
        answer: "Currently, you can use one payment method per order. However, you can use gift cards or store credit in combination with other payment methods."
    },

    // Account & Orders
    {
        category: "Account & Orders",
        question: "Do I need an account to shop?",
        answer: "No, you can checkout as a guest. However, creating an account lets you track orders, save favorites, and get personalized recommendations."
    },
    {
        category: "Account & Orders",
        question: "How do I track my order?",
        answer: "Once your order ships, you'll receive a tracking link via email and SMS. You can also track orders from your account dashboard."
    },
    {
        category: "Account & Orders",
        question: "Can I cancel my order?",
        answer: "Yes, you can cancel orders within 24 hours of placement. Go to your order history and click 'Cancel Order'. Refunds are processed within 5-7 business days."
    }
];

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

    const filteredFAQs = activeCategory === "All"
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    return (
        <main>
            <Navbar />

            <div className={styles.faqContainer}>
                <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                    {/* Header */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>Frequently Asked Questions</h1>
                        <p className={styles.subtitle}>
                            Find answers to common questions about Fitloom. Can't find what you're looking for?
                            <a href="#contact" style={{ color: '#fff', marginLeft: '5px', textDecoration: 'underline' }}>Contact us</a>
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className={styles.categories}>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className={styles.faqList}>
                        {filteredFAQs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={styles.question}
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        style={{
                                            transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className={styles.answer}
                                    style={{
                                        maxHeight: activeIndex === index ? '200px' : '0',
                                        opacity: activeIndex === index ? '1' : '0'
                                    }}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className={styles.contactSection} id="contact">
                        <h2>Still have questions?</h2>
                        <p>Our customer support team is here to help!</p>
                        <div className={styles.contactOptions}>
                            <div className={styles.contactCard}>
                                <div className={styles.contactIcon}>📧</div>
                                <h3>Email Us</h3>
                                <p>support@fitloom.com</p>
                                <span>Response within 24 hours</span>
                            </div>
                            <div className={styles.contactCard}>
                                <div className={styles.contactIcon}>💬</div>
                                <h3>Live Chat</h3>
                                <p>Chat with our team</p>
                                <span>Available 9 AM - 9 PM IST</span>
                            </div>
                            <div className={styles.contactCard}>
                                <div className={styles.contactIcon}>📞</div>
                                <h3>Call Us</h3>
                                <p>1800-123-4567</p>
                                <span>Mon-Sat, 9 AM - 6 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
