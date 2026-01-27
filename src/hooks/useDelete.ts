import { generateClient } from "aws-amplify/api";
import type { Schema } from "../../amplify/data/resource";
import { remove, list } from 'aws-amplify/storage';

const client = generateClient<Schema>();

export function useDelete() {

    const deleteBook = async (bookId: string) => {
        // const resources = await client.models.BookResource.list({
        //     filter: { bookId: { eq: bookId } }
        // });

        // await Promise.all(
        //     resources.data.map(r =>
        //         client.models.BookResource.delete({ id: r.id })
        //     )
        // );

        // const audios = await client.models.BookAudio.list({
        //     filter: { bookId: { eq: bookId } }
        // });

        // await Promise.all(
        //     audios.data.map(a =>
        //         client.models.BookAudio.delete({ id: a.id })
        //     )
        // );

        const videos = await client.models.BookVideo.list({
            filter: { bookId: { eq: bookId } }
        });

        const resources = await list({ path: `recursos/${bookId}/`, options: { listAll: true } });

        await Promise.all(
            resources.items.map(r =>
                remove({ path: r.path })
            )
        );

        const audios = await list({ path: `audios/${bookId}/`, options: { listAll: true } });

        await Promise.all(
            audios.items.map(a =>
                remove({ path: a.path })
            )
        );

        await remove({
            path: `recursos/${bookId}/`,
        });

        await remove({
            path: `audios/${bookId}/`,
        });

        await Promise.all(
            videos.data.map(v =>
                client.models.BookVideo.delete({ id: v.id })
            )
        );

        await client.models.Book.delete({ id: bookId });
    };

    const deleteSubject = async (subjectId: string) => {
        const books = await client.models.Book.list({
            filter: { subjectId: { eq: subjectId } }
        });

        for (const book of books.data) {
            await deleteBook(book.id);
        }

        const userSubjects = await client.models.UserSubject.list({
            filter: { subjectId: { eq: subjectId } }
        });

        await Promise.all(
            userSubjects.data.map(us =>
                client.models.UserSubject.delete({ id: us.id })
            )
        );

        await client.models.Subject.delete({ id: subjectId });
    };

    const deleteLevel = async (levelId: string) => {
        const subjects = await client.models.Subject.list({
            filter: { levelId: { eq: levelId } }
        });

        for (const subject of subjects.data) {
            await deleteSubject(subject.id);
        }

        const userLevels = await client.models.UserLevel.list({
            filter: { levelId: { eq: levelId } }
        });

        await Promise.all(
            userLevels.data.map(ul =>
                client.models.UserLevel.delete({ id: ul.id })
            )
        );

        await client.models.Level.delete({ id: levelId });
    };

    const deleteEstablishment = async (establishmentId: string) => {
        const levels = await client.models.Level.list({
            filter: { establishmentId: { eq: establishmentId } }
        });

        for (const level of levels.data) {
            await deleteLevel(level.id);
        }

        const userEst = await client.models.UserEstablishment.list({
            filter: { establishmentId: { eq: establishmentId } }
        });

        await Promise.all(
            userEst.data.map(ue =>
                client.models.UserEstablishment.delete({ id: ue.id })
            )
        );

        await client.models.Establishment.delete({ id: establishmentId });
    };

    return {
        deleteBook,
        deleteSubject,
        deleteLevel,
        deleteEstablishment
    };
}
