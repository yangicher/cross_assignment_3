import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'mentor' | 'menti';

type AuthState = {
    isLoggedIn: boolean;
    role: UserRole | null;
};

type AuthContextType = AuthState & {
    loginAsMentor: () => void;
    loginAsMenti: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState<UserRole | null>(null);

    const loginAsMentor = () => {
        setRole('mentor');
        setIsLoggedIn(true);
    };

    const loginAsMenti = () => {
        setRole('menti');
        setIsLoggedIn(true);
    };

    const logout = () => {
        setRole(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                role,
                loginAsMentor,
                loginAsMenti,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return ctx;
}
