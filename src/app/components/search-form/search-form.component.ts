import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  HostListener,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  AsyncValidatorFn,
} from '@angular/forms';
import { debounceTime, delay, filter, map, of, take } from 'rxjs';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent implements OnInit {
  /**
   * Form control for the search input. It has synchronous validators for minimum and maximum length, and an asynchronous validator to check if there are results for the search term.
   * The asynchronous validator simulates an API call to check if there are results for the search term. It returns { noResults: true } if there are no results.
   * The valueChanges observable is used to emit the search term when it changes, but only after the validation has completed and is valid.
   * The search term is also trimmed to prevent emitting empty or whitespace-only strings.
   */
  searchTerm = new FormControl(
    '',
    [Validators.minLength(2), Validators.maxLength(50)],
    [this.noResultsValidator()],
  );

  songService = inject(SongService);

  ngOnInit() {
    this.searchTerm.valueChanges.pipe(debounceTime(400)).subscribe((value) => {
      if (!value || value.trim() === '') {
        this.search.emit('');
        return;
      }

      // wait for validation to finish
      this.searchTerm.statusChanges
        .pipe(
          filter((status) => status !== 'PENDING'),
          take(1),
        )
        .subscribe((status) => {
          if (status === 'VALID') {
            // New search cancels popularActive
            this.isPopularActive = false;
            this.search.emit(value);
          }
        });
    });
  }

  /**
   * Async validator that simulated a an API call to check if there are results for the search term.
   * Returns { noResults: true } if there are no results.
   */
  noResultsValidator(): AsyncValidatorFn {
    return (control) => {
      const value = control.value;

      if (!value || value.length < 2) {
        return of(null);
      }

      return this.songService.searchSongsCheck(value).pipe(
        delay(500), // Simulate network delay
        map((results) => {
          return results.length === 0 ? { noResults: true } : null;
        }),
      );
    };
  }

  // Clear button reference for template use
  clearButton: any;
  @HostListener('document:keydown.escape')
  onEscapePressed() {
    if (this.searchTerm.value) {
      this.searchTerm.reset();
    }
  }

  // Output event emitter to send the search term to the parent component when it changes and is valid.
  @Output() search = new EventEmitter<string>();

  // Output event emitter to signal the parent component to show popular songs when the corresponding button is clicked.
  @Output() showPopular = new EventEmitter<void>();
  isPopularActive = false;
  onPopularClick() {
    // Toggle state
    this.isPopularActive = !this.isPopularActive;

    // Reset input WITHOUT triggering valueChanges
    this.searchTerm.reset('', { emitEvent: false });

    // Reset validation state
    this.searchTerm.markAsPristine();
    this.searchTerm.markAsUntouched();

    // Emit popular search or empty search depending on state
    if (this.isPopularActive) {
      this.showPopular.emit();
    } else {
      this.search.emit('');
    }
  }
}
