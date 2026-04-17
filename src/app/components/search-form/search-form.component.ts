import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
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
    this.searchTerm.valueChanges
    .pipe(debounceTime(400))
    .subscribe(value => {
      if (this.searchTerm.valid) {
        this.search.emit(value || '');
      }
    });
  }
  
  // Clear button reference for template use
  clearButton: any;
  @HostListener('document:keydown.escape')
  onEscapePressed() {
    if (this.searchTerm.value) {
      this.searchTerm.reset();
    }
  }
}
