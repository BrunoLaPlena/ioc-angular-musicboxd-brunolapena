import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Song } from '../../models/song.model';
import { SongCardComponent } from '../song-card/song-card.component';

@Component({
  selector: 'app-songs-list',
  standalone: true,
  imports: [CommonModule, SongCardComponent],
  templateUrl: './songs-list.component.html',
  styleUrl: './songs-list.component.scss',
})
export class SongsListComponent {
  @Input() filteredSongs: Song[] = [];

  trackById(index: number, song: Song): string {
    return song.id;
  }
}
