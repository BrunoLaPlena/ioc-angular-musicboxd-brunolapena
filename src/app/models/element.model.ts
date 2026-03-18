export interface Element {
    id: String; // Generated as the title, artist and album initials plus a random number
    title: string;
    artist: string;
    album: string;
    published: Date;
    duration: number; // in seconds
    genres: string[];
    rating?: number; // Optional property for user rating, can be null if not rated
}