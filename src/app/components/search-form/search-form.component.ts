import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent implements OnInit {
  searchTerm = new FormControl('', [
    Validators.minLength(2),
    Validators.maxLength(50)
  ]);

  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.searchTerm.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      
      if (!value) {
        // If the search term is empty, load the cached full list without making another API call.
        this.search.emit('__CACHED__');
      } else if (this.searchTerm.valid) {
        // If the search term is valid, emit the search event with the query.
        this.search.emit(value || '');
      } else {
        // If the search term is invalid, fall back to the chached full list without making another API call.
        this.search.emit('__CACHED__');
      }

    });
  }
}
