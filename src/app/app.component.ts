import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SongService } from './services/song.service';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SongsListComponent, SearchFormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = 'ioc-angular-musicboxd-brunolaplena';
  songService = inject(SongService);

  //Load songs from service
  ngOnInit() {
    this.songService.loadAllSongs();
  }

  onSearch(query: string) {
    // If the search term is invalid, reset to the cached full list without making another API call.
    if(query === '__CACHED__') {
      this.songService.resetToAllSongs();
    } else {
      this.songService.searchSongsByTitle(query);
    }
  }

  onShowPopular() {
    this.songService.getPopularSongs();
  }

  retry() {
    this.songService.loadAllSongs();
  }
}
