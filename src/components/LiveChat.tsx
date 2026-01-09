"use client";

import { useState } from 'react';
import styles from './LiveChat.module.css';

export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with support system
        console.log('Chat message:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <>
            {/* Chat Button */}
            <button
                className={styles.chatButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open live chat"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <div>
                            <h3>Chat with Us</h3>
                            <p>We typically reply within minutes</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className={styles.closeBtn}
                            aria-label="Close chat"
                        >
                            ×
                        </button>
                    </div>

                    <div className={styles.chatBody}>
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className={styles.chatForm}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="chat-name">Name</label>
                                    <input
                                        id="chat-name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="chat-email">Email</label>
                                    <input
                                        id="chat-email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="chat-message">Message</label>
                                    <textarea
                                        id="chat-message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        placeholder="How can we help you?"
                                        rows={4}
                                    />
                                </div>

                                <button type="submit" className={styles.sendBtn}>
                                    Send Message
                                </button>

                                <p className={styles.helpText}>
                                    Or email us at <a href="mailto:support@fitloom.com">support@fitloom.com</a>
                                </p>
                            </form>
                        ) : (
                            <div className={styles.successState}>
                                <div className={styles.successIcon}>✓</div>
                                <h4>Message Sent!</h4>
                                <p>We'll get back to you as soon as possible.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
