"use client";

import { useState } from 'react';
import styles from './TryOnModal.module.css';

interface TryOnModalProps {
    onClose: () => void;
    productImage: string;
}

export default function TryOnModal({ onClose, productImage }: TryOnModalProps) {
    const [step, setStep] = useState<'upload' | 'processing' | 'result'>('upload');
    const [userImage, setUserImage] = useState<string | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUserImage(e.target?.result as string);
                setStep('processing');
                // Simulate AI processing
                setTimeout(() => {
                    setStep('result');
                }, 2000);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button onClick={onClose} className={styles.closeBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className={styles.header}>
                    <h3>AI Virtual Try-On</h3>
                    <p>See how this looks on you.</p>
                </div>

                <div className={styles.previewArea}>
                    {step === 'upload' && (
                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ flex: 1, background: productImage, opacity: 0.5 }}></div>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%' }}>
                                <label className={styles.uploadArea}>
                                    <input type="file" accept="image/*" onChange={handleFileUpload} hidden />
                                    <span style={{ display: 'block', marginBottom: '8px', fontSize: '24px' }}>📸</span>
                                    <span style={{ fontWeight: 500 }}>Upload a Selfie</span>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#888', marginTop: '4px' }}>Clear lighting works best</span>
                                </label>
                            </div>
                        </div>
                    )}

                    {step === 'processing' && (
                        <div style={{ textAlign: 'center' }}>
                            <div className="loader" style={{
                                width: '40px', height: '40px',
                                border: '3px solid #eee',
                                borderTopColor: '#000',
                                borderRadius: '50%',
                                margin: '0 auto 16px',
                                animation: 'spin 1s linear infinite'
                            }}>
                                <style jsx>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                            </div>
                            <p>Aligning mesh...</p>
                            <p style={{ fontSize: '0.8rem', color: '#888' }}>Generating realistic lighting</p>
                        </div>
                    )}

                    {step === 'result' && (
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div style={{ width: '100%', height: '100%', backgroundColor: productImage }}></div>
                            {/* Mock result: overlay user image in a circle at the top as if "face swapped" (very rough mock) */}
                            {userImage && (
                                <div style={{
                                    position: 'absolute',
                                    top: '10%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    backgroundImage: `url(${userImage})`,
                                    backgroundSize: 'cover',
                                    border: '2px solid #fff',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                }}></div>
                            )}
                            <div style={{ position: 'absolute', bottom: '16px', left: '0', width: '100%', textAlign: 'center' }}>
                                <span style={{ background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem' }}>AI Generated Preview</span>
                            </div>
                        </div>
                    )}
                </div>

                {step === 'result' && (
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setStep('upload')}>Try Another</button>
                        <button className="btn btn-primary" style={{ flex: 1 }}>Add to Cart</button>
                    </div>
                )}
            </div>
        </div>
    );
}
