import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { MOCK_ELEMENTS } from './mocks/data-mock';
import { Song } from './models/song.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SongsListComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ioc-angular-musicboxd-brunolaplena';
  allSongs: Song[] = MOCK_ELEMENTS;
  filteredSongs: Song[] = this.allSongs;

  searchQuery: string = '';

  onSearch(query: string) {
    const lowerTerm = query.toLowerCase();

    this.filteredSongs = this.allSongs.filter(song =>
      song.title.toLowerCase().includes(lowerTerm) ||
      song.artist.toLowerCase().includes(lowerTerm)
    );
  }
}
