export interface SongApiResponse {
  id: string;
  name: string;
  description?: string | null; // Optional, will be empty or null most of the time
  category: string; //genre(s), can be a comma-separated string
  price: number; // Unused, always 0
  image: string;
  stock: number; // Unused, always 0
  popular: boolean;

  // Extra fields
  artist: string;
  album: string;
  published: string;
  duration: number; // in seconds
  globalRating: number;
}

export interface Song {
  id: string;
  title: string; // Derived from name
  artist: string; // Derived from description
  album: string;
  coverImage: string; // URL to the cover image
  published: Date; // Converted to Date
  duration: number; // in seconds
  genres: string[]; // Split the category string into an array of genres
  globalRating: number; // Derived from stock
  popular: boolean;
  personalRating?: number; // Optional local property for user rating, can be null if not rated
  description?: string; // Optional, will be empty most of the time
}
