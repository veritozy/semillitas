import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
// const schema = a.schema({
//   Todo: a
//     .model({
//       content: a.string(),
//     })
//     .authorization((allow) => [allow.publicApiKey()]),
// });

export const schema = a.schema({

  Establishment: a.model({
    description: a.string().required(),
    location: a.string(),

    // 1:N con User
    users: a.hasMany("UserEstablishment", "establishmentId"),
  }),

  User: a.model({
    name: a.string().required(),
    email: a.string().required(),
    photoUrl: a.string(),

    // establishmentId: a.id(),
    // establishment: a.belongsTo("Establishment", "establishmentId"),

    // Tablas pivote
    establishments: a.hasMany("UserEstablishment", "userId"),
    roles: a.hasMany("UserRole", "userId"),
    levels: a.hasMany("UserLevel", "userId"),
    subjects: a.hasMany("UserSubject", "userId"),
  }),

  Level: a.model({
    name: a.string().required(),

    users: a.hasMany("UserLevel", "levelId"),
  }),

  Subject: a.model({
    name: a.string().required(),

    books: a.hasMany("Book", "subjectId"),
    users: a.hasMany("UserSubject", "subjectId"),
  }),

  Book: a.model({
    title: a.string().required(),
    embedCode: a.string().required(),
    imageUrl: a.string(),
    description: a.string().required(),
    category: a.string().required(),
    subjectId: a.id().required(),
    subject: a.belongsTo("Subject", "subjectId"),

    resources: a.hasMany("BookResource", "bookId"),
  }),

  BookResource: a.model({
    name: a.string().required(),
    url: a.string().required(),
    public: a.boolean().required().default(true),

    bookId: a.id().required(),
    book: a.belongsTo("Book", "bookId"),
  }),

  Role: a.model({
    description: a.string().required(),

    users: a.hasMany("UserRole", "roleId"),
  }),

  // TABLAS PIVOTE N:M

  UserEstablishment: a.model({
    userId: a.id().required(),
    establishmentId: a.id().required(),

    user: a.belongsTo("User", "userId"),
    establishment: a.belongsTo("Establishment", "establishmentId"),

  }),

  UserRole: a.model({
    userId: a.id().required(),
    roleId: a.id().required(),

    user: a.belongsTo("User", "userId"),
    role: a.belongsTo("Role", "roleId"),

  }),

  UserLevel: a.model({
    userId: a.id().required(),
    levelId: a.id().required(),

    user: a.belongsTo("User", "userId"),
    level: a.belongsTo("Level", "levelId"),

  }),

  UserSubject: a.model({
    userId: a.id().required(),
    subjectId: a.id().required(),

    user: a.belongsTo("User", "userId"),
    subject: a.belongsTo("Subject", "subjectId"),

  }),

}).authorization((allow) => allow.publicApiKey());


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
