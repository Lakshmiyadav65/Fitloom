"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from "@/components/Navbar";
import { products, Product } from "@/data/products";
import TryOnModal from "@/components/TryOnModal";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";

// Demo Reviews Data
const demoReviews = [
    {
        id: '1',
        userName: 'Priya Sharma',
        rating: 5,
        date: '2024-01-05',
        comment: 'Absolutely love this! The fit is perfect and the quality is amazing. Highly recommend!',
        verified: true,
        helpful: 24
    },
    {
        id: '2',
        userName: 'Rahul Mehta',
        rating: 4,
        date: '2024-01-03',
        comment: 'Great product! Runs slightly large, so consider sizing down. Material feels premium.',
        verified: true,
        helpful: 18
    },
    {
        id: '3',
        userName: 'Ananya Patel',
        rating: 5,
        date: '2023-12-28',
        comment: 'This exceeded my expectations! The color is exactly as shown and it arrived quickly.',
        verified: false,
        helpful: 12
    },
    {
        id: '4',
        userName: 'Vikram Singh',
        rating: 4,
        date: '2023-12-20',
        comment: 'Good quality for the price. Would buy again!',
        verified: true,
        helpful: 8
    }
];

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [showTryOn, setShowTryOn] = useState(false);
    const [showSizeGuide, setShowSizeGuide] = useState(false);
    const { user } = useAuth();
    const { addToCart } = useCart();

    useEffect(() => {
        if (id) {
            const p = products.find(p => p.id === id);
            setProduct(p || null);

            // Track recently viewed
            if (p) {
                const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
                const filtered = recentlyViewed.filter((item: Product) => item.id !== p.id);
                const updated = [p, ...filtered].slice(0, 6);
                localStorage.setItem('recentlyViewed', JSON.stringify(updated));
            }
        }
    }, [id]);

    if (!product) {
        return (
            <main>
                <Navbar />
                <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
                    Loading...
                </div>
            </main>
        );
    }

    // You May Also Like - Same demographic or category
    const youMayAlsoLike = products.filter(p =>
        p.id !== product.id &&
        (p.demographic === product.demographic || p.category === product.category)
    ).slice(0, 4);

    // Calculate average rating
    const avgRating = (demoReviews.reduce((acc, r) => acc + r.rating, 0) / demoReviews.length).toFixed(1);

    return (
        <main>
            <Navbar />

            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <div className={styles.productGrid}>
                    {/* Image Section */}
                    <div className={styles.imageSection} style={{ backgroundColor: '#fff', position: 'relative' }}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'contain', padding: '20px' }}
                            priority
                        />
                    </div>

                    {/* Details Section */}
                    <div className={styles.detailsSection}>
                        <span style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>
                            {product.category} • {product.demographic}
                        </span>
                        <h1 className={styles.title}>{product.name}</h1>

                        {/* Rating */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                {[1, 2, 3, 4, 5].map(star => (
                                    <span key={star} style={{ color: star <= parseFloat(avgRating) ? '#FFD700' : '#333', fontSize: '1.2rem' }}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>
                                {avgRating} ({demoReviews.length} reviews)
                            </span>
                        </div>

                        <p className={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>

                        {/* Size Selector */}
                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '12px' }}>
                                <label style={{ fontSize: '0.95rem', fontWeight: '600' }}>Select Size</label>
                                <button
                                    onClick={() => setShowSizeGuide(true)}
                                    style={{ color: '#888', fontSize: '0.85rem', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    Size Guide
                                </button>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                    <button
                                        key={size}
                                        style={{
                                            padding: '10px 20px',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            background: 'rgba(255,255,255,0.05)',
                                            color: '#fff',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                        }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
                            <button
                                className="btn btn-primary"
                                style={{ flex: 1 }}
                                onClick={() => {
                                    addToCart(product);
                                    alert("Added to cart!");
                                }}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="btn btn-secondary"
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                onClick={() => {
                                    if (!user) {
                                        alert("Please login to use AI features.");
                                        return;
                                    }
                                    setShowTryOn(true);
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 10l5 5-5 5" />
                                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                </svg>
                                Try It On
                            </button>
                        </div>

                        <div className={styles.description}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Product Details</h3>
                            <p>Designed for the modern individual. This piece combines premium materials with a relaxed fit. Perfect for layering or wearing solo.</p>
                            <ul style={{ marginTop: '16px', paddingLeft: '20px', color: '#aaa', lineHeight: '1.8' }}>
                                <li>Premium {product.color} fabric</li>
                                <li>Comfortable and breathable</li>
                                <li>Easy care - Machine washable</li>
                                <li>Sustainable materials</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Customer Reviews */}
                <div style={{ marginTop: '80px', maxWidth: '900px', margin: '80px auto 0' }}>
                    <h2 style={{ marginBottom: '32px', fontSize: '1.8rem' }}>Customer Reviews</h2>

                    <div style={{ display: 'grid', gap: '24px' }}>
                        {demoReviews.map(review => (
                            <div
                                key={review.id}
                                style={{
                                    padding: '24px',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                            <span style={{ fontWeight: '600' }}>{review.userName}</span>
                                            {review.verified && (
                                                <span style={{ fontSize: '0.75rem', color: '#22c55e', background: 'rgba(34, 197, 94, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                                                    ✓ Verified Purchase
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <span key={star} style={{ color: star <= review.rating ? '#FFD700' : '#333' }}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                    <span style={{ color: '#666', fontSize: '0.85rem' }}>{review.date}</span>
                                </div>
                                <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '12px' }}>{review.comment}</p>
                                <button style={{ color: '#888', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                                    👍 Helpful ({review.helpful})
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* You May Also Like */}
                <div style={{ marginTop: '100px' }}>
                    <h2 style={{ marginBottom: '40px', textAlign: 'center', fontSize: '2rem' }}>You May Also Like</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
                        {youMayAlsoLike.map(rec => (
                            <ProductCard key={rec.id} product={rec} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Size Guide Modal */}
            {showSizeGuide && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: '20px'
                    }}
                    onClick={() => setShowSizeGuide(false)}
                >
                    <div
                        style={{
                            background: '#1a1a1a',
                            padding: '40px',
                            borderRadius: '16px',
                            maxWidth: '600px',
                            width: '100%',
                            maxHeight: '80vh',
                            overflow: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                            <h2>Size Guide</h2>
                            <button
                                onClick={() => setShowSizeGuide(false)}
                                style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
                            >
                                ×
                            </button>
                        </div>

                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Size</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Chest (in)</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Waist (in)</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Length (in)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { size: 'XS', chest: '34-36', waist: '28-30', length: '27' },
                                    { size: 'S', chest: '36-38', waist: '30-32', length: '28' },
                                    { size: 'M', chest: '38-40', waist: '32-34', length: '29' },
                                    { size: 'L', chest: '40-42', waist: '34-36', length: '30' },
                                    { size: 'XL', chest: '42-44', waist: '36-38', length: '31' },
                                    { size: 'XXL', chest: '44-46', waist: '38-40', length: '32' }
                                ].map(row => (
                                    <tr key={row.size} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>{row.size}</td>
                                        <td style={{ padding: '12px', color: '#aaa' }}>{row.chest}</td>
                                        <td style={{ padding: '12px', color: '#aaa' }}>{row.waist}</td>
                                        <td style={{ padding: '12px', color: '#aaa' }}>{row.length}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                            <h4 style={{ marginBottom: '8px', fontSize: '0.95rem' }}>How to Measure</h4>
                            <ul style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8', paddingLeft: '20px' }}>
                                <li>Chest: Measure around the fullest part of your chest</li>
                                <li>Waist: Measure around your natural waistline</li>
                                <li>Length: Measure from shoulder to hem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {showTryOn && (
                <TryOnModal
                    onClose={() => setShowTryOn(false)}
                    productImage={product.image}
                />
            )}
        </main>
    );
}
