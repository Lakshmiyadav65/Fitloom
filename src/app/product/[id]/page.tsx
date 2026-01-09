"use client";

import Link from 'next/link';
import Image from 'next/image'; // Added missing import
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from "@/components/Navbar";
import { products, Product } from "@/data/products";
import TryOnModal from "@/components/TryOnModal";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [showTryOn, setShowTryOn] = useState(false);
    const { user } = useAuth();
    const { addToCart } = useCart();

    useEffect(() => {
        if (id) {
            const p = products.find(p => p.id === id);
            setProduct(p || null);
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

    // Recommendations Logic (Mock)
    // If Top -> Recommend Bottom
    // If Bottom -> Recommend Top
    const recommendations = products.filter(p =>
        p.id !== product.id &&
        ((product.category === 'Top' && p.category === 'Bottom') ||
            (product.category === 'Bottom' && p.category === 'Top') ||
            (product.category === 'Outerwear' && p.category === 'Top') ||
            p.category === 'Accessories')
    ).slice(0, 3);

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
                        <span style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{product.category}</span>
                        <h1 className={styles.title}>{product.name}</h1>
                        <p className={styles.price}>${product.price.toFixed(2)}</p>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
                            <button
                                className="btn btn-primary"
                                style={{ flex: 1 }}
                                onClick={() => {
                                    addToCart(product);
                                    // Optional: Add toast notification
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
                            <p>Designed for the modern individual. This piece combines premium materials with a relaxed, unisex fit. Perfect for layering or wearing solo.</p>
                        </div>
                    </div>
                </div>

                {/* AI Stylist Recommendations */}
                <div style={{ marginTop: '120px' }}>
                    <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>AI Stylist Recommends</h2>
                    <div className="grid-cols-3">
                        {recommendations.map(rec => (
                            <ProductCard key={rec.id} product={rec} />
                        ))}
                    </div>
                </div>
            </div>

            {showTryOn && (
                <TryOnModal
                    onClose={() => setShowTryOn(false)}
                    productImage={product.image}
                />
            )}
        </main>
    );
}
