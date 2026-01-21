import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

export function useAllBooksByEstablishment(
    establishmentId?: string,
    cognitoUserId?: string
) {
    const [books, setBooks] = useState<Schema["Book"]["type"][]>([]);
    const [authorized, setAuthorized] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!establishmentId || !cognitoUserId) return;

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

                const { data: membership } =
                    await client.models.UserEstablishment.list({
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

                const { data: levels } = await client.models.Level.list({
                    filter: {
                        establishmentId: { eq: establishmentId }
                    }
                });

                if (!levels || levels.length === 0) {
                    setBooks([]);
                    setAuthorized(true);
                    return;
                }

                const levelIds = levels.map(l => l.id);

                const { data: subjects } = await client.models.Subject.list({
                    filter: {
                        or: levelIds.map(id => ({
                            levelId: { eq: id }
                        }))
                    }
                });

                if (!subjects || subjects.length === 0) {
                    setBooks([]);
                    setAuthorized(true);
                    return;
                }

                const subjectIds = subjects.map(s => s.id);

                const { data: booksData } = await client.models.Book.list({
                    filter: {
                        or: subjectIds.map(id => ({
                            subjectId: { eq: id }
                        }))
                    }
                });

                setBooks(booksData ?? []);
                setAuthorized(true);
            } catch (error) {
                console.error("useAllBooksByEstablishment error", error);
                setAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [establishmentId, cognitoUserId]);

    return {
        books,
        authorized,
        loading
    };
}
