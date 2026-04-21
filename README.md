# MusicBoxd – Bruno La Plena

## Description

MusicBoxd is a web application that allows users to explore a catalog of songs, search dynamically, and manage a personalized list of favorites.

Users can:

- Search songs in real time with validation
- View popular songs
- Mark songs as favorites
- Add and manage personal notes for each favorite
- Persist their data across sessions

The application focuses on reactive state management, clean architecture, and user-friendly interactions.

---

## Features

- 🔍 **Reactive Search**
  - Debounced input (400ms)
  - Synchronous and asynchronous validation
  - Real-time feedback and error handling

- ⭐ **Favorites Management**
  - Add/remove favorites
  - Persistent storage using `localStorage`
  - Favorites counter

- 📝 **Notes System**
  - Dynamic notes per favorite (FormArray)
  - Validation (minimum 3 characters)
  - Live synchronization with application state

- 🔥 **Popular Songs Filter**
  - Toggle between full catalog and popular songs

- ⚡ **Reactive State**
  - Built with Angular Signals
  - Automatic UI updates based on state changes

---

## Technical Stack

- Angular 18 (Standalone Components)
- TypeScript
- SCSS
- Angular Reactive Forms
- Angular Signals
- RxJS
- Node.js / npm

---

## Architecture

The application follows a clear separation of responsibilities:

- **Services** → Data management and API communication
- **Components** → UI and user interaction
- **Forms** → Handled at the component level
- **Signals** → Source of truth for application state

This structure ensures scalability, maintainability, and clean data flow.

---

## Project Structure

```id="oz2c5u"
src/
  app/
    components/
    services/
    models/
docs/
  services.md
  models.md
  forms.md
```

---

## Status

Core features are fully implemented:

- Search with validation (sync + async)
- Favorites system with persistence
- Notes management using FormArray
- UI feedback and accessibility improvements

The application is stable and ready for evaluation.

---

## Author

Bruno La Plena
