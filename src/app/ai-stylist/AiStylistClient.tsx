"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AiStylist.module.css';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';

type Message = {
    id: number;
    type: 'ai' | 'user';
    content: React.ReactNode;
    options?: string[];
    action?: 'occasion' | 'vibe' | 'show_results' | 'restart';
};

export default function AiStylistClient() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: 'ai',
            content: "Hello! I'm your personal AI Stylist. I can help you curate the perfect look. To get started, tell me: what is the occasion?",
            options: ['Casual Hangout', 'Date Night', 'Office / Work', 'Streetwear'],
            action: 'occasion'
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [preferences, setPreferences] = useState({ occasion: '', vibe: '' });
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleOptionClick = async (option: string, action: string) => {
        // Add User Message
        const userMsg: Message = { id: Date.now(), type: 'user', content: option };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Prepare next AI step
        let nextMsg: Message | null = null;
        let newPrefs = { ...preferences };

        if (action === 'occasion') {
            newPrefs.occasion = option;
            await new Promise(r => setTimeout(r, 1000));
            nextMsg = {
                id: Date.now() + 1,
                type: 'ai',
                content: `Got it, ${option}. Now, what kind of vibe are you feeling today?`,
                options: ['Minimalist', 'Cozy', 'Bold / Edgy'],
                action: 'vibe'
            };
        } else if (action === 'vibe') {
            newPrefs.vibe = option;
            await new Promise(r => setTimeout(r, 1500));
            nextMsg = {
                id: Date.now() + 1,
                type: 'ai',
                content: "Processing your preferences... scanning our latest collection...",
            };
            // Trigger result after processing
            setTimeout(() => generateOutfit(newPrefs), 1500); // Cascading delay
        }

        setPreferences(newPrefs);
        if (nextMsg) {
            setMessages(prev => [...prev, nextMsg!]);
            setIsTyping(false);
        }
    };

    const generateOutfit = (prefs: { occasion: string, vibe: string }) => {
        setIsTyping(true);

        // Logic to select 3 items based on prefs (Mock)
        // Default fallback
        let selectedIds = ['1', '5', '6']; // Hoodie, Cargos, Sneaker (Streetwear)

        if (prefs.occasion === 'Office / Work' || prefs.occasion === 'Date Night') {
            selectedIds = ['3', '2', '4']; // Coat, Trousers, Tee
        }

        const selectedProducts = products.filter(p => selectedIds.includes(p.id));

        setTimeout(() => {
            setIsTyping(false);
            const resultMsg: Message = {
                id: Date.now() + 2,
                type: 'ai',
                content: (
                    <div>
                        <p style={{ marginBottom: '16px' }}>
                            Based on your <strong>{prefs.occasion}</strong> needs and <strong>{prefs.vibe}</strong> style, I've curated this look for you:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                            {selectedProducts.map(p => (
                                <div key={p.id} style={{ transform: 'scale(0.9)', transformOrigin: 'top left' }}>
                                    <ProductCard product={p} />
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '24px', textAlign: 'center' }}>
                            <button className="btn btn-primary">Add All to Cart - ${(selectedProducts.reduce((a, b) => a + b.price, 0)).toFixed(2)}</button>
                        </div>
                    </div>
                ),
                options: ['Start Over'],
                action: 'restart'
            };
            setMessages(prev => [...prev, resultMsg]);
        }, 1500);
    };

    const handleRestart = () => {
        setMessages([{
            id: Date.now(),
            type: 'ai',
            content: "Let's try something else. What is the occasion?",
            options: ['Casual Hangout', 'Date Night', 'Office', 'Streetwear'],
            action: 'occasion'
        }]);
        setPreferences({ occasion: '', vibe: '' });
    };

    return (
        <div className={styles.container}>
            <div className={styles.chatWindow}>
                {messages.map(msg => (
                    <div key={msg.id} className={`${styles.message} ${msg.type === 'ai' ? styles.messageAi : styles.messageUser}`}>
                        <div className={styles.avatar}>
                            {msg.type === 'ai' ? '✨' : '👤'}
                        </div>
                        <div className={styles.bubble}>
                            {msg.content}

                            {msg.options && (
                                <div className={styles.optionsGrid}>
                                    {msg.options.map(opt => (
                                        <button
                                            key={opt}
                                            className={styles.optionBtn}
                                            onClick={() => msg.action === 'restart' ? handleRestart() : handleOptionClick(opt, msg.action!)}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className={styles.typingIndicator}>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>
        </div>
    );
}
