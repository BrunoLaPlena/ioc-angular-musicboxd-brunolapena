import { Component, inject, Input } from '@angular/core';
import { Song } from '../../models/song.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent {
  @Input() song!: Song;

  favoritesService = inject(FavoritesService);

  /**
   * Toggles the favorite status of the current song. 
   * If the song is already a favorite, it will be removed from the favorites list.
   * In not, it will be added.
   */
  toggleFavorite(): void {
    if (this.favoritesService.isFavorite(this.song.id)) {
      this.favoritesService.removeFavorite(this.song.id);
    } else {
      this.favoritesService.addFavorite(this.song);
    }
  }

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.song.id);
  }
}
