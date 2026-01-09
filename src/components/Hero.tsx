"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate normalized mouse position (-1 to 1)
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Floating Cards Layer - Parallax Layer 2 (Faster) */}
            <div
                className={styles.cardContainer}
                style={{
                    transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                {/* Card 1: Input (Sketch) */}
                <div className={`${styles.floatingCard} ${styles.cardInput}`}>
                    <div className={styles.cardImage}>
                        <Image src="/images/hero-sketch.png" alt="Input: Sketch" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.cardLabel}>Input</div>
                    <div className={styles.cardDesc}>Raw Sketches</div>
                </div>

                {/* Card 2: Process (Fabric Detail) */}
                <div className={`${styles.floatingCard} ${styles.cardProcess}`}>
                    <div className={styles.cardImage}>
                        <Image src="/images/hero-fabric.png" alt="Process: Fabric Analysis" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.cardLabel}>AI Model</div>
                    <div className={styles.cardDesc}>Fabric Simulation</div>
                </div>

                {/* Card 3: Output (Final Look) */}
                <div className={`${styles.floatingCard} ${styles.cardOutput}`}>
                    <div className={styles.cardImage}>
                        <Image src="/images/hero-model-new.png" alt="Output: Final Look" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                    <div className={styles.cardLabel}>Output</div>
                    <div className={styles.cardDesc}>Photorealistic Try-On</div>
                </div>

                {/* Card 4: AI Stylist */}
                <div className={`${styles.floatingCard} ${styles.cardVideo}`}>
                    <div className={styles.cardImage}>
                        <Image src="/images/hero-ai-stylist.png" alt="AI Stylist Interface" fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                    <div className={styles.cardLabel}>AI Stylist</div>
                    <div className={styles.cardDesc}>Try the AI Stylist</div>
                </div>
            </div>

            {/* Central Content - Static or subtle move */}
            {/* Central Content - Static or subtle move */}
            <div
                className={styles.content}
                style={{
                    transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <div className={`${styles.badge} animate-fade-in`}>
                    <span className={styles.badgeDot}></span> AI Stylist V2.0
                </div>
                <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
                    The building blocks <br />
                    <span className={styles.textGradient}>for your personal style.</span>
                </h1>
                <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                    Build pro outfits that come together as masterpieces. <br />Powered by our advanced AI Stylist engine.
                </p>
                <div className={`${styles.actions} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
                    <Link href="/ai-stylist" className="btn btn-primary">
                        Start Styling
                    </Link>
                    <Link href="/shop" className="btn btn-secondary">
                        Browse Shop
                    </Link>
                </div>
            </div>
        </section>
    );
}
