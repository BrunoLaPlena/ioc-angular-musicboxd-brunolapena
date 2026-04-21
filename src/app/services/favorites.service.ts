import { Injectable, signal, computed } from '@angular/core';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _favorites = signal<Song[]>([]);
  favorites = this._favorites.asReadonly();
  favoriteCount = computed(() => this._favorites().length);

  private readonly FAVORITES_KEY = 'favoriteSongs';

  /**
   * Initializes the service by loading favorites from localStorage.
   * If there are no favorites stored, it initializes with an empty array.
   * Any errors during loading will be caught and logged, and the favorites will be set to an empty array.
   */
  private loadFavorites(): void {
    try {
      const storedFavorites = localStorage.getItem(this.FAVORITES_KEY);
      
      if (storedFavorites) {
        const parsedFavorites: Song[] = JSON.parse(storedFavorites);
        this._favorites.set(parsedFavorites);
      } else {
        this._favorites.set([]);
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage: ', error);
      this._favorites.set([]);
    }
  }

  /**
   * Saves the current list of favorite songs to localStorage.
   * Overwrites any existing favorites stored under the same key because the signal is the source of truth.
   * Any errors during saving will be caught and logged.
   */
  private saveFavorites(): void {
    try {
      const favoritesToStore = JSON.stringify(this._favorites());
      localStorage.setItem(this.FAVORITES_KEY, favoritesToStore);
    } catch (error) {
      console.error('Error saving favorites to localStorage: ', error);
    }
  }

  /**
   * Public method to add a song to the favorites list.
   * It first checks if the song is already in the favorites to prevent duplicates.
   * If the song is not already a favorite, it adds it to the list and saves the updated list to localStorage.
   * @param song The Song object to be added to favorites.
   */
  addFavorite(song: Song): void {
    const currentFavorites = this._favorites();
    if (!currentFavorites.some(fav => fav.id === song.id)) {
      this._favorites.set([...currentFavorites, song]);
      this.saveFavorites();
    }
  }

  /**
   * Public method to remove a song from the favorites list.
   * It filters out the song with the specified ID from the current favorites list and updates the signal.
   * After updating the favorites list, it saves the updated list to localStorage.
   * @param songID The ID of the song to be removed from favorites.
   */
  removeFavorite(songID: string): void {
    const currentFavorites = this._favorites();
    const updatedFavorites = currentFavorites.filter(fav => fav.id !== songID);
    this._favorites.set(updatedFavorites);
    this.saveFavorites();
  }

  /**
   * Public method to check if a song is in the favorites list.
   * It checks if any song in the current favorites list has the same ID as the provided song.
   * @param songID The ID of the song to check for in the favorites list.
   * @returns A boolean indicating whether the song is a favorite or not.
   */
  isFavorite(songID: string): boolean {
    return this._favorites().some(fav => fav.id === songID);
  }   
}
