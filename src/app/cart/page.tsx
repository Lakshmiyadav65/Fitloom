"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, total } = useCart();

    return (
        <main>
            <Navbar />
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <h1 style={{ marginBottom: '40px' }}>Shopping Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</h1>

                {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 0' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '24px', color: '#666' }}>Your cart is empty.</p>
                        <Link href="/shop" className="btn btn-primary">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
                        {/* Cart Items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {cart.map(item => (
                                <div key={`${item.id}-${item.size}`} style={{
                                    display: 'flex',
                                    gap: '24px',
                                    paddingBottom: '24px',
                                    borderBottom: '1px solid #eee'
                                }}>
                                    <div style={{ position: 'relative', width: '100px', height: '120px', background: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <h3 style={{ fontSize: '1.1rem' }}>{item.name}</h3>
                                                <p style={{ fontWeight: 500 }}>${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '4px' }}>
                                                Size: {item.size}
                                            </p>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
                                            {/* Quantity Controls */}
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                background: '#f5f5f5',
                                                padding: '6px 12px',
                                                borderRadius: '8px'
                                            }}>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                    style={{
                                                        width: '28px',
                                                        height: '28px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        background: '#fff',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600',
                                                        color: '#333',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = '#000';
                                                        e.currentTarget.style.color = '#fff';
                                                        e.currentTarget.style.borderColor = '#000';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = '#fff';
                                                        e.currentTarget.style.color = '#333';
                                                        e.currentTarget.style.borderColor = '#ddd';
                                                    }}
                                                >
                                                    −
                                                </button>
                                                <span style={{
                                                    minWidth: '30px',
                                                    textAlign: 'center',
                                                    fontWeight: '600',
                                                    fontSize: '0.95rem'
                                                }}>
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                    style={{
                                                        width: '28px',
                                                        height: '28px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        background: '#fff',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600',
                                                        color: '#333',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = '#000';
                                                        e.currentTarget.style.color = '#fff';
                                                        e.currentTarget.style.borderColor = '#000';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = '#fff';
                                                        e.currentTarget.style.color = '#333';
                                                        e.currentTarget.style.borderColor = '#ddd';
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                style={{
                                                    fontSize: '0.9rem',
                                                    textDecoration: 'underline',
                                                    color: '#666',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div style={{
                            background: '#f9f8f6',
                            padding: '24px',
                            borderRadius: '16px',
                            height: 'fit-content'
                        }}>
                            <h3 style={{ marginBottom: '24px' }}>Order Summary</h3>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <span style={{ color: '#666' }}>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                <span style={{ color: '#666' }}>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>

                            <div style={{ borderTop: '1px solid #ddd', paddingTop: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
