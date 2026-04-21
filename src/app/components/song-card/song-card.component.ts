import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../../models/song.model';
import { FavoriteItem, FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent {
  @Input() song!: Song;
  @Input() favorite?: FavoriteItem;
  @Input() variant: 'default' | 'compact' = 'default'; 

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

  get notes(): string[] {
    return this.favorite?.notes ?? [];
  }
}
