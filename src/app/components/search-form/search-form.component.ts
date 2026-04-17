import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent implements OnInit {
  searchTerm = new FormControl('');

  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.searchTerm.valueChanges.subscribe(value => {
      this.search.emit(value || '');
    });
  }
}
