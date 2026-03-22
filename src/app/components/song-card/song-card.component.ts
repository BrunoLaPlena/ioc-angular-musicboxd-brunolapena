import { Component, Input } from '@angular/core';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent {
  @Input() song!: Song;
}
