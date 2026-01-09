"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

interface CartItem extends Product {
    quantity: number;
    size: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, size?: string) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, size: string, newQuantity: number) => void;
    clearCart: () => void;
    total: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from local storage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem("fitloom_cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to local storage on change
    useEffect(() => {
        localStorage.setItem("fitloom_cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product, size: string = 'M') => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id && item.size === size);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id && item.size === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1, size }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: string, size: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart((prev) =>
            prev.map((item) =>
                item.id === productId && item.size === size
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
