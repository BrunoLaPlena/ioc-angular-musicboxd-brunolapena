import { Injectable, signal, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song, SongApiResponse } from '../models/song.model';
import { mapMultipleSongsFromApi } from '../mappers/song.mapper';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SongService {
  private http = inject(HttpClient);

  private readonly SONGS_ENDPOINT = '/songs';
  private songsDirectory = environment.apiUrl + this.SONGS_ENDPOINT;
  
  private _songs = signal<Song[]>([]);
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);

  songs = this._songs.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();

  /**
   * Generic helper method to fetch songs. 
   * It's used by the public methods to fetch song in different ways. 
   * Handles loading and error states.
   * @param url The URL of the API endpoint to fetch songs from, passed by the public methods.
   */
  private fetchSongs(url: string): void {
  this._loading.set(true);
  this._error.set(null);

  this.http.get<SongApiResponse[]>(url).subscribe({
    next: (response) => {
      this._songs.set(mapMultipleSongsFromApi(response));
      this._loading.set(false);
    },
    error: () => {
      this._error.set('Failed to load songs');
      this._loading.set(false);
    }
  });
}

  /**
   * Loads all songs from the API and updates the songs signal.
   */
  loadAllSongs() {
    this.fetchSongs(this.songsDirectory);
  }
  
  /**
   * Searches for songs from the API based on the provided query and updates the songs signal with the results.
   * @param query The search query to filter songs by title, artist, or album.
   */
  searchSongs(query: string) {
    this.fetchSongs(`${this.songsDirectory}?name_like=${query}`);
  }

  /**
   * Gets all songs from the API that are marked as popular.
   */
  getPopularSongs() {
    this.fetchSongs(`${this.songsDirectory}?popular=true`);
  }
}
