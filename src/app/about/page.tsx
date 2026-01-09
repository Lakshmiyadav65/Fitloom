"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>Our Story</span>
                    <h1 className={styles.heroTitle}>
                        Redefining Fashion with <span className={styles.gradient}>AI Innovation</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Fitloom is where cutting-edge artificial intelligence meets timeless style.
                        We're building the future of personalized fashion, one outfit at a time.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle}>Our Mission</h2>
                            <p className={styles.paragraph}>
                                At Fitloom, we believe that everyone deserves to look and feel their best.
                                Our mission is to democratize high-end fashion styling through advanced AI technology,
                                making personalized style accessible to everyone, everywhere.
                            </p>
                            <p className={styles.paragraph}>
                                We combine machine learning, computer vision, and fashion expertise to create
                                a platform that understands your unique style preferences and helps you build
                                outfits that truly represent who you are.
                            </p>
                        </div>
                        <div className={styles.imageCard}>
                            <div className={styles.imagePlaceholder}>
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.centerTitle}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                    <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Innovation First</h3>
                            <p className={styles.valueDesc}>
                                We constantly push the boundaries of what's possible with AI and fashion technology.
                            </p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="12" cy="7" r="4" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>User-Centric</h3>
                            <p className={styles.valueDesc}>
                                Every decision we make is guided by what's best for our users and their style journey.
                            </p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Sustainability</h3>
                            <p className={styles.valueDesc}>
                                We're committed to promoting sustainable fashion choices and reducing waste.
                            </p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Excellence</h3>
                            <p className={styles.valueDesc}>
                                We strive for excellence in every aspect, from our AI models to customer service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.imageCard}>
                            <div className={styles.imagePlaceholder}>
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
                                    <path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle}>Powered by Advanced AI</h2>
                            <p className={styles.paragraph}>
                                Our proprietary AI Stylist engine uses state-of-the-art machine learning models
                                trained on millions of fashion combinations. It understands color theory, body types,
                                seasonal trends, and personal preferences to create perfectly curated outfits.
                            </p>
                            <div className={styles.techList}>
                                <div className={styles.techItem}>
                                    <span className={styles.techBullet}>✓</span>
                                    <span>Computer Vision for garment analysis</span>
                                </div>
                                <div className={styles.techItem}>
                                    <span className={styles.techBullet}>✓</span>
                                    <span>Neural networks for style matching</span>
                                </div>
                                <div className={styles.techItem}>
                                    <span className={styles.techBullet}>✓</span>
                                    <span>Real-time fabric simulation</span>
                                </div>
                                <div className={styles.techItem}>
                                    <span className={styles.techBullet}>✓</span>
                                    <span>Personalized recommendation engine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>500K+</div>
                            <div className={styles.statLabel}>Outfits Created</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>98%</div>
                            <div className={styles.statLabel}>Satisfaction Rate</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>50K+</div>
                            <div className={styles.statLabel}>Active Users</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>24/7</div>
                            <div className={styles.statLabel}>AI Assistance</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Transform Your Style?</h2>
                    <p className={styles.ctaSubtitle}>
                        Join thousands of fashion-forward individuals using AI to elevate their wardrobe.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="/ai-stylist" className="btn btn-primary">Try AI Stylist</a>
                        <a href="/shop" className="btn btn-secondary">Browse Collection</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
