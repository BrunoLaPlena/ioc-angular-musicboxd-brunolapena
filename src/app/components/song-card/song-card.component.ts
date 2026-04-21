import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../../models/song.model';
import { FavoriteItem, FavoritesService } from '../../services/favorites.service';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent implements OnInit {
  @Input() song!: Song;
  @Input() favorite?: FavoriteItem;
  @Input() variant: 'default' | 'favorites' = 'default'; 

  notesForm = new FormArray<FormControl<string>>([]);

  ngOnInit() {
    if (this.favorite) {
      this.notesForm.clear();

      this.favorite.notes.forEach(note => {
        this.notesForm.push(new FormControl(note, {nonNullable: true}));
      });
    }
  }

  get notes(): string[] {
    return this.favorite?.notes ?? [];
  }

  addNote() {
    this.notesForm.push(new FormControl('', {nonNullable: true}));
  }

  favoritesService = inject(FavoritesService);

  /**
   * Toggles the favorite status of the current song. 
   * If the song is already a favorite, it will be removed from the favorites list.
   * In not, it will be added.
   */
  toggleFavorite(): void {
    if (this.favoritesService.isFavorite(this.song.id)) {
      this.favoritesService.removeFavorite(this.song.id);
    } else {
      this.favoritesService.addFavorite(this.song);
    }
  }

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.song.id);
  }

}
