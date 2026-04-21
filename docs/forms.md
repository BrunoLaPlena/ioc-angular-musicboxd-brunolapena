# Forms

## SearchFormComponent

The search form is implemented using Reactive Forms with a single `FormControl`.

### Main Control

```ts
searchTerm: FormControl<string>;
```

---

## Synchronous Validation

- `minLength(2)`
- `maxLength(50)`

These validators ensure that the search query has a valid length before being processed.

---

## Asynchronous Validator

The `noResultsValidator` simulates an API request to check whether results exist.

### Behavior

- Runs only when the input has at least 2 characters
- Calls `searchSongsCheck()`
- Introduces a 500ms delay to simulate network latency
- Returns `{ noResults: true }` when no results are found

### Validation State

During validation:

- `control.pending === true`
- A "Validating..." indicator is displayed

---

## Debounce

The form uses:

```ts
valueChanges.pipe(debounceTime(400));
```

### Why?

- Prevents excessive API calls
- Improves performance
- Enhances user experience

### How it works

The value is only emitted after the user stops typing for 400ms.

---

## Search Flow Control

A search is only triggered when:

- The control is valid (`VALID`)
- The async validation has completed

This ensures:

- No unnecessary requests
- No inconsistent UI states

---

## FormArray for Notes

Each favorite song can have multiple notes, managed with:

```ts
FormArray<FormControl<string>>;
```

### Characteristics

- Dynamic (notes can be added/removed)
- Each note is an independent FormControl
- Uses `nonNullable: true` to prevent null values

---

## Notes Validation

- Minimum length: 3 characters
- Invalid notes are not persisted

---

## Synchronization with Service

- `FormArray.valueChanges` updates the service
- The service updates the Signal
- The Signal updates the UI

Flow:

```ts
UI → FormArray → FavoritesService → localStorage
```

---

## Design Philosophy

- Forms belong to the UI layer
- Data belongs to services
- Clear separation of responsibilities

This architecture improves scalability and maintainability.
