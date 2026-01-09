"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/data/products";

const CATEGORIES = ['All', 'Top', 'Bottom', 'Outerwear', 'Accessories', 'Footwear', 'Dresses', 'Activewear'];
const DEMOGRAPHICS = ['All', 'Men', 'Women', 'Kids', 'Professional'];

export default function ShopPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeDemographic, setActiveDemographic] = useState('All');

    const filteredProducts = products.filter(p => {
        const categoryMatch = activeCategory === 'All' || p.category === activeCategory;
        const demographicMatch = activeDemographic === 'All' || p.demographic === activeDemographic;
        return categoryMatch && demographicMatch;
    });

    return (
        <main>
            <Navbar />

            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <div style={{ marginBottom: '40px' }}>
                    <h1 style={{ marginBottom: '32px' }}>Collection</h1>

                    {/* Demographic Filters */}
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '0.9rem', color: '#888', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Shop For</h3>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {DEMOGRAPHICS.map(demo => (
                                <button
                                    key={demo}
                                    onClick={() => setActiveDemographic(demo)}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '24px',
                                        border: activeDemographic === demo ? '1px solid #fff' : '1px solid rgba(255,255,255,0.2)',
                                        background: activeDemographic === demo ? '#fff' : 'rgba(255,255,255,0.05)',
                                        color: activeDemographic === demo ? '#000' : '#fff',
                                        fontSize: '0.95rem',
                                        fontWeight: activeDemographic === demo ? '600' : '400',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)',
                                        whiteSpace: 'nowrap'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeDemographic !== demo) {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeDemographic !== demo) {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                        }
                                    }}
                                >
                                    {demo}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div>
                        <h3 style={{ fontSize: '0.9rem', color: '#888', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Category</h3>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingBottom: '8px' }}>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '24px',
                                        border: activeCategory === cat ? '1px solid #fff' : '1px solid rgba(255,255,255,0.2)',
                                        background: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.05)',
                                        color: activeCategory === cat ? '#000' : '#fff',
                                        fontSize: '0.95rem',
                                        fontWeight: activeCategory === cat ? '600' : '400',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)',
                                        whiteSpace: 'nowrap'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeCategory !== cat) {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeCategory !== cat) {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                        }
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid - 4 columns */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '32px',
                    marginBottom: '40px'
                }}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>
                        No products found matching your filters.
                    </div>
                )}
            </div>
        </main>
    );
}
