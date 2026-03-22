import { Component, Input } from '@angular/core';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-songs-list',
  standalone: true,
  imports: [],
  templateUrl: './songs-list.component.html',
  styleUrl: './songs-list.component.scss'
})
export class SongsListComponent {
  @Input() songs: Song[] = [];
}
