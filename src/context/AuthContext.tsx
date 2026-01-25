import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

type AuthContextType = {
    cognitoUserId: string | null;
    loading: boolean;
    roles: string[];
    isAdmin: boolean;
    isTeacher: boolean;
    isStudent: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [cognitoUserId, setCognitoUserId] = useState<string | null>(null);
    const [roles, setRoles] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const { userId } = await getCurrentUser();
                setCognitoUserId(userId ?? null);

                if (!userId) return;

                const users = await client.models.User.list({
                    filter: { userId: { eq: userId } }
                });

                const internalUser = users.data[0];

                if (!internalUser) throw new Error("Usuario no existe en BD");

                // UserRole
                const userRoles = await client.models.UserRole.list({
                    filter: { userId: { eq: internalUser.id } }
                });

                const roleIds = userRoles.data.map(r => r.roleId);

                // Role
                const rolesData = await Promise.all(
                    roleIds.map(id => client.models.Role.get({ id }))
                );

                const roleNames = rolesData
                    .map(r => r.data?.description)
                    .filter(Boolean) as string[];
                setRoles(roleNames);

            } catch {
                setCognitoUserId(null);
                setRoles([]);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const isAdmin = roles.includes("Administrador");
    const isTeacher = roles.includes("Docente");
    const isStudent = roles.includes("Estudiante");

    return (
        <AuthContext.Provider
            value={{
                cognitoUserId,
                loading,
                roles,
                isAdmin,
                isTeacher,
                isStudent
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
