import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { Song } from './models/song.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SongService } from './services/song.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SongsListComponent, SearchBarComponent, CommonModule],
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
    this.songService.searchSongs(query);
  }

  onShowPopular() {
    this.songService.getPopularSongs();
  }
}
