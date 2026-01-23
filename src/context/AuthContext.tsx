import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";

type AuthContextType = {
    cognitoUserId: string | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [cognitoUserId, setCognitoUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const { userId } = await getCurrentUser();
                setCognitoUserId(userId ?? null);
            } catch {
                setCognitoUserId(null);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ cognitoUserId, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
