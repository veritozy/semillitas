import type { Schema } from "../../amplify/data/resource";

export type Establishment = Schema["Establishment"]["type"];
export type User = Schema["User"]["type"];
export type Level = Schema["Level"]["type"];
export type Subject = Schema["Subject"]["type"];
export type Book = Schema["Book"]["type"];
export type BookResource = Schema["BookResource"]["type"];
export type BookAudio = Schema["BookAudio"]["type"];
export type BookVideo = Schema["BookVideo"]["type"];
export type Role = Schema["Role"]["type"];
export type UserEstablishment = Schema["UserEstablishment"]["type"];
export type UserRole = Schema["UserRole"]["type"];
export type UserLevel = Schema["UserLevel"]["type"];
export type UserSubject = Schema["UserSubject"]["type"];


export type ElementType = "establecimientos" | "niveles" | "asignaturas" | "libros" | "audios";

export interface ButtonData {
    href?: string;
    text?: string;
    onClick?: (id?: string) => void | Promise<void>;
    type?: "primary" | "secondary" | "danger";
}

export interface PathData {
    href: string;
    text: string;
}
export interface BreadcrumbItem {
    label?: string;
    path?: string;
}