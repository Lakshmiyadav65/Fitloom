import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
    return (
        <main>
            <Navbar />
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 24px',
                backgroundColor: 'var(--color-surface)',
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(200, 200, 200, 0.2) 0%, transparent 60%)'
            }}>
                <LoginForm />
            </div>
        </main>
    );
}
