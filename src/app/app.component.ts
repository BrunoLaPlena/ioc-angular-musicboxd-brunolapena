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
    this.songService.loadSongs();
  }
  
  // Store signals in local variables for easier access
  loading = computed(() => this.songService.loading());
  error = computed(() => this.songService.error());
  allSongs = computed(() => this.songService.songs());

  // Filtering logic
  searchQuery = signal('');

  filteredSongs = computed(() => {
    const query = this.searchQuery().toLowerCase();
    
    return this.allSongs().filter(song =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    );
  });

  onSearch(query: string) {
    this.searchQuery.set(query);
  }
}
