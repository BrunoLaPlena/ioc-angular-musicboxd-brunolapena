export interface SongApiResponse {
  id: string;
  nom: string;
  descripcio: string; // artist
  categoria: string; //genre(s)
  preu: number; // duration
  imatge: string;
  stock: number; // Average global rating
  popular: boolean;

  // Extra fields
  dataPublicacio: string;
  album: string;
}

export interface Song {
    id: string;
    title: string; // Derived from nom
    artist: string; // Derived from descripcio
    album: string;
    coverImage: string; // URL to the cover image
    published: Date; // dataPublicacio converted to Date
    duration: number; // in seconds
    genres: string[]; // Split the category string into an array of genres
    globalRating: number; // Derived from stock
    popular: boolean;
    personalRating?: number; // Optional property for user rating, can be null if not rated
}