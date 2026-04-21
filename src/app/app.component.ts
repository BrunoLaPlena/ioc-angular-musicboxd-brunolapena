import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SongService } from './services/song.service';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FavoritesService } from './services/favorites.service';
import { FavoritesPanelComponent } from './components/favorites-panel/favorites-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SongsListComponent, SearchFormComponent, CommonModule, FavoritesPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = 'ioc-angular-musicboxd-brunolaplena';
  songService = inject(SongService);
  favoritesService = inject(FavoritesService);

  //Load songs from service
  ngOnInit() {
    this.songService.loadAllSongs();
    this.favoritesService.loadFavorites();
  }

  onSearch(query: string) {
    this.songService.searchSongsByTitle(query);
  }

  onShowPopular() {
    this.songService.getPopularSongs();
  }

  retry() {
    this.songService.loadAllSongs();
  }
}
