# Services

## HTTP Service (SongService)

The `SongService` is responsible for handling communication with the songs REST API. It centralizes all HTTP requests and manages the global catalog state using Angular Signals.

### Endpoints

- `GET /songs` → Fetch all songs
- `GET /songs?name_like={query}` → Search by name
- `GET /songs?popular=true` → Fetch popular songs

### Main Methods

- `loadAllSongs()`
  Loads all songs from the API.

- `searchSongsByTitle(query: string)`
  Performs a filtered search by name.

- `getPopularSongs()`
  Retrieves songs marked as popular.

- `searchSongsCheck(query: string)`
  Used exclusively by the async validator to check if results exist without affecting the global state.

### State Management

The service uses Signals to manage:

- `songs` → Current list of songs
- `loading` → Loading state
- `error` → Error message

This allows the UI to react automatically to state changes.

---

## Favorites Service (FavoritesService)

The `FavoritesService` manages the list of favorite songs with persistence across sessions using `localStorage`.

### Persistence

- Storage key: `'favoriteSongs'`
- Favorites are loaded when the service initializes
- All operations are wrapped in `try/catch` to handle storage errors safely

### Data Model

Each favorite is represented as:

```ts
interface FavoriteItem {
  song: Song;
  notes: string[];
}
```

### Signals

- `favorites` → List of favorite items
- `favoriteCount` → Total number of favorites (computed)

### Public Methods

- `addFavorite(song: Song)`
  Adds a song if it is not already in favorites.

- `removeFavorite(songId: string)`
  Removes a favorite by ID.

- `isFavorite(songId: string)`
  Checks if a song is marked as favorite.

- `updateNotes(songId: string, notes: string[])`
  Updates notes associated with a favorite using an immutable update pattern.

### Design Philosophy

The service acts as the single source of truth.
The UI never mutates data directly and always interacts through the service.
