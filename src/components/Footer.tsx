"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // TODO: Integrate with email service
            console.log('Subscribing:', email);
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* Newsletter Section */}
                <div className={styles.newsletter}>
                    <div className={styles.newsletterContent}>
                        <h3>Stay in Style</h3>
                        <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    </div>
                    <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.emailInput}
                        />
                        <button type="submit" className={styles.subscribeBtn}>
                            Subscribe
                        </button>
                    </form>
                    {subscribed && (
                        <p className={styles.successMessage}>✓ Thanks for subscribing!</p>
                    )}
                </div>

                {/* Footer Links */}
                <div className={styles.footerGrid}>
                    <div className={styles.footerColumn}>
                        <h4>Shop</h4>
                        <Link href="/shop?demographic=Men">Men</Link>
                        <Link href="/shop?demographic=Women">Women</Link>
                        <Link href="/shop?demographic=Kids">Kids</Link>
                        <Link href="/shop?demographic=Professional">Professional</Link>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Help</h4>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/faq#shipping">Shipping & Delivery</Link>
                        <Link href="/faq#returns">Returns & Exchanges</Link>
                        <Link href="/faq#sizing">Size Guide</Link>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Company</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/ai-stylist">AI Stylist</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Sustainability</Link>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Connect</h4>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p>&copy; 2024 Fitloom. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
