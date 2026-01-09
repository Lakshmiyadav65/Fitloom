import Navbar from "@/components/Navbar";
import AiStylistClient from "./AiStylistClient";

export default function AiStylistPage() {
    return (
        <main style={{
            background: 'linear-gradient(135deg, #f9f8f6 0%, #ffffff 100%)',
            minHeight: '100vh',
        }}>
            <Navbar />
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>AI Personal Stylist</h1>
                    <p style={{ color: '#666' }}>Chat with our AI to find your perfect look.</p>
                </div>
                <AiStylistClient />
            </div>
        </main>
    );
}
