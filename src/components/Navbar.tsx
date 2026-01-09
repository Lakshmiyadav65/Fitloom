"use client";

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
    const { user, logout } = useAuth();
    const { cartCount } = useCart();

    return (
        <>
            {/* Free Shipping Banner */}
            <div style={{
                background: 'linear-gradient(90deg, #000 0%, #333 100%)',
                color: '#fff',
                textAlign: 'center',
                padding: '8px 0',
                fontSize: '0.85rem',
                fontWeight: '500',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                🎉 Free Shipping on Orders Over ₹999 | Shop Now!
            </div>

            <nav className={styles.navbar}>
                <div className={`container ${styles.navContainer}`}>
                    <Link href="/" className={styles.logo}>
                        FITLOOM
                    </Link>

                    <div className={styles.links}>
                        <Link href="/shop" className={styles.link}>Shop</Link>
                        <Link href="/ai-stylist" className={styles.link}>AI Stylist</Link>
                        <Link href="/about" className={styles.link}>Story</Link>
                        <Link href="/faq" className={styles.link}>FAQ</Link>
                    </div>

                    <div className={styles.actions}>
                        <button aria-label="Search" className={styles.iconBtn}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>

                        <Link href="/cart" aria-label="Cart" className={styles.iconBtn} style={{ position: 'relative' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: -5,
                                    right: -8,
                                    background: '#000',
                                    color: '#fff',
                                    fontSize: '10px',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>{cartCount}</span>
                            )}
                        </Link>

                        {user ? (
                            <div className={styles.userMenu}>
                                <span className={styles.userName}>Hi, {user.name}</span>
                                <button
                                    onClick={logout}
                                    className="btn btn-secondary"
                                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link href="/login" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
