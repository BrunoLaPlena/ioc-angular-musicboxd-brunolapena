import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song, SongApiResponse } from '../models/song.model';
import { mapMultipleSongsFromApi } from '../mappers/song.mapper';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SongService {
  private http = inject(HttpClient);
  private ApiDirectory = environment.apiUrl + environment.endpoints.songs;
  
  songs = signal<Song[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  
  loadSongs() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<SongApiResponse[]>(this.ApiDirectory)
      .subscribe({
        next: (response) => {
          const songs = mapMultipleSongsFromApi(response);
          this.songs.set(songs);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load songs');
          this.loading.set(false);
        }
      });
  }
}
