import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource.ts";
import { Book } from "../types/types.ts";

const client = generateClient<Schema>();

export function useProtectedBook(
    bookId?: string,
    cognitoUserId?: string
) {
    const [book, setBook] = useState<Book | null>(null);
    const [authorized, setAuthorized] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!bookId || !cognitoUserId) return;

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

                const { data: bookData } =
                    await client.models.Book.get({ id: bookId });

                if (!bookData) {
                    setAuthorized(false);
                    return;
                }

                const { data: membership } =
                    await client.models.UserSubject.list({
                        filter: {
                            and: [
                                { userId: { eq: user.id } },
                                { subjectId: { eq: bookData.subjectId } }
                            ]
                        }
                    });

                if (!membership || membership.length === 0) {
                    setAuthorized(false);
                    return;
                }

                setBook(bookData);
                setAuthorized(true);
            } catch (error) {
                console.error("useProtectedBook error", error);
                setAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [bookId, cognitoUserId]);

    return {
        book,
        authorized,
        loading
    };
}
