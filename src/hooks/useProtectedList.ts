import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource.ts";

const client = generateClient<Schema>();

type PivotTable =
    | "UserEstablishment"
    | "UserLevel"
    | "UserSubject"
    | "UserRole";

type ResourceTable =
    | "Establishment"
    | "Level"
    | "Subject"
    | "Book";

interface UseProtectedListProps {
    pivot: PivotTable;
    targetId?: string;
    resource: ResourceTable;
    foreignKey: string;
    cognitoUserId?: string;
}

export function useProtectedList<T>({
    pivot,
    targetId,
    resource,
    foreignKey,
    cognitoUserId
}: UseProtectedListProps) {
    const [data, setData] = useState<T[]>([]);
    const [authorized, setAuthorized] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!targetId || !cognitoUserId) return;

        const load = async () => {
            try {
                const { data: users } = await client.models.User.list({
                    filter: {
                        userId: { eq: cognitoUserId }
                    }
                });

                if (!users || users.length === 0) {
                    setAuthorized(false);
                    return;
                }

                const user = users[0];

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const pivotClient = (client.models as any)[pivot];

                const { data: membership } = await pivotClient.list({
                    filter: {
                        and: [
                            { userId: { eq: user.id } },
                            { [foreignKey]: { eq: targetId } }
                        ]
                    }
                });

                if (!membership || membership.length === 0) {
                    setAuthorized(false);
                    return;
                }

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const resourceClient = (client.models as any)[resource];

                const { data: resourceData } = await resourceClient.list({
                    filter: {
                        [foreignKey]: { eq: targetId }
                    }
                });

                setData(resourceData ?? []);
                setAuthorized(true);
            } catch (error) {
                console.error("useProtectedList error", error);
                setAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [pivot, targetId, resource, foreignKey, cognitoUserId]);

    return {
        data,
        authorized,
        loading
    };
}
