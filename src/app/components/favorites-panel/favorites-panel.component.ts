import { Component, computed, inject } from '@angular/core';
import { FavoriteItem, FavoritesService } from '../../services/favorites.service';
import { SongCardComponent } from '../../components/song-card/song-card.component';
import { CommonModule } from '@angular/common';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-favorites-panel',
  standalone: true,
  imports: [SongCardComponent, CommonModule],
  templateUrl: './favorites-panel.component.html',
  styleUrl: './favorites-panel.component.scss'
})
export class FavoritesPanelComponent {
  favoritesService = inject(FavoritesService);

  trackById(index: number, favorite: FavoriteItem) {
    return favorite.song.id;
  }
}
