import { Album } from "./album";

export interface Genre {
    genreId: number;
    name: string;
    description?: string;
    albums?: Album[];
}
