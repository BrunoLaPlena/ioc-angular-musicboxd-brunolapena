# Model Mapping – Song

This table describes the mapping between the API response (`SongApiResponse`) and the internal application model (`Song`).

## Field Mapping

| API Field (SongApiResponse) | Internal Field (Song) | TypeScript Type  | Transformation / Notes                    |
| --------------------------- | --------------------- | ---------------- | ----------------------------------------- |
| id                          | id                    | string           | Direct mapping                            |
| name                        | title                 | string           | Renamed for clarity                       |
| description                 | description           | string/undefined | Direct mapping (optional field)           |
| artist                      | artist                | string           | Direct mapping                            |
| album                       | album                 | string           | Direct mapping                            |
| image                       | coverImage            | string           | Renamed for clarity                       |
| published                   | published             | Date             | Converted from string to `Date`           |
| duration                    | duration              | number           | Direct mapping (seconds)                  |
| category                    | genres                | string[]         | Split by commas into array (`split(',')`) |
| globalRating                | globalRating          | number           | Direct mapping                            |
| popular                     | popular               | boolean          | Direct mapping                            |

## Unused API Fields

| API Field | TypeScript Type | Notes               |
| --------- | --------------- | ------------------- |
| price     | number          | Not used (always 0) |
| stock     | number          | Not used (always 0) |

## Additional Internal Fields

| Internal Field | TypeScript Type | Notes     |
| -------------- | --------------- | --------- | ---------------------------------------- |
| personalRating | number          | undefined | User-defined rating, not provided by API |

## Notes

- The `description` will be empty most of the time, but it's still included as an optional field for the rare cases when it has data.
- The `category` field is a comma separated list of genres that's transformed into an array using `split(',')`.
- The `published` field is converted from a string to a `Date` object.
- API fields `price` and `stock` will always be 0 because songs are not material objects and don't have either price or stock.
