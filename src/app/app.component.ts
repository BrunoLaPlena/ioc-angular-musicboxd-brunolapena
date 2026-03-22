import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { MOCK_ELEMENTS } from './mocks/data-mock';
import { Song } from './models/song.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SongsListComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-musicboxd-brunolaplena';
  songs: Song[] = MOCK_ELEMENTS;

  seartchQuery: string = '';

  onSearch(query: string) {
    this.seartchQuery = query;
    console.log('Search:', query);
  }
}
