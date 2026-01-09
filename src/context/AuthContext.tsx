"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    // Load user from local storage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("fitloom_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string) => {
        // Simulate login
        const mockUser: User = {
            id: "u_123",
            name: email.split("@")[0],
            email: email,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + email,
        };
        setUser(mockUser);
        localStorage.setItem("fitloom_user", JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("fitloom_user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
