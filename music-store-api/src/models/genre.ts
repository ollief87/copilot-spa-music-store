import { Album } from "./album";

// Genre model with name string property
export interface Genre {
    genreId: number;
    name: string;
    description?: string;
    albums?: Album[];
}
