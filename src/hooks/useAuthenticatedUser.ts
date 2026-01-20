import { useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";

export function useAuthenticatedUser() {
    const [cognitoUserId, setCognitoUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const { userId } = await getCurrentUser();

                if (!userId) {
                    setCognitoUserId(null);
                    return;
                }

                setCognitoUserId(userId);
            } catch {
                setCognitoUserId(null);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    return {
        cognitoUserId,
        loading
    };
}
