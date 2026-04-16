import { Song, SongApiResponse } from "../models/song.model";

/**
 * Maps a SongApiResponse object from the API to a Song object used in the application.
 * 
 * @param apiResponse The raw song data received from the API, which may have different field names and formats. 
 * @returns A Song object initialized with the mapped properties.
 */
export function mapSongFromApi(apiResponse: SongApiResponse): Song {
    const {
        id, name, description, category, image, artist, album, published, duration, stock, popular
    } = apiResponse;
    return {
        id,
        title: name,
        description: description?.trim() || undefined,
        artist,
        album,
        coverImage: image,
        published: new Date(published),
        duration,
        genres: category.split(',').map(g => g.trim()).filter(g => g.length > 0),
        globalRating: stock,
        popular,
        personalRating: undefined
    };
}

/**
 * Maps an array of SongApiResponse objects from the API to an array of Song objects used in the application.
 * 
 * @param apiResponses An array of raw song data received from the API.
 * @return An array of Song objects initialized with the mapped properties.
 */
export function mapMultipleSongsFromApi(apiResponses: SongApiResponse[]): Song[] {
    return apiResponses.map(mapSongFromApi);
}