import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { Level } from "../types/types";
import type { Schema } from "../../amplify/data/resource.ts";

const client = generateClient<Schema>();

export function useEstablishmentLevels(
    establishmentId?: string,
    userId?: string
) {
    const [levels, setLevels] = useState<Level[]>([]);
    const [authorized, setAuthorized] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!establishmentId || !userId) return;

        const load = async () => {
            try {
                const { data: users } = await client.models.User.list({
                    filter: {
                        userId: { eq: userId }
                    }
                });

                if (!users || users.length === 0) {
                    setAuthorized(false);
                    return;
                }

                const user = users[0];

                const { data: membership } = await client.models.UserEstablishment.list({
                    filter: {
                        and: [
                            { userId: { eq: user.id } },
                            { establishmentId: { eq: establishmentId } }
                        ]
                    }
                });

                if (!membership || membership.length === 0) {
                    setAuthorized(false);
                    return;
                }

                const { data: levelsData } = await client.models.Level.list({
                    filter: {
                        establishmentId: { eq: establishmentId }
                    }
                });

                setLevels(levelsData ?? []);
                setAuthorized(true);
            } catch (error) {
                console.error("useEstablishmentLevels error", error);
                setAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [establishmentId, userId]);

    return {
        levels,
        authorized,
        loading
    };
}
