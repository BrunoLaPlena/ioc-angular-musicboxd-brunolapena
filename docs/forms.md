# SearchForm Component

## Overview

The `SearchFormComponent` implements a reactive search form using Angular Reactive Forms. It provides real-time search with validation, debouncing, and accessibility support.

---

## Form Control

The form is built using a single `FormControl` which implements both sync and async validation, as well a 400s debounce:

- The sync validation prevent the search from being emitted if the query isn't between 2 and 50 characters long.

- The async validation simulated an API call to see if there are any results available for the inputted query with a 500s delay while showing a "Validatin..." message. After that, it will either let the search load if there are results, or show an error message "No results found" if there aren't.

- The debounce intreduces a waiting window to prevent the search from firing immediately for each character the user types, and instead to fire only when the user is done typing, otherwise a simple 5 character query would fire 5 separate API calls, which would be inefficient and also make the UI look messy.
