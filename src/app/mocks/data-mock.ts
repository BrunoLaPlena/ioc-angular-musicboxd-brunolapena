import { Song } from '../models/song.model';

export const MOCK_ELEMENTS: Song[] = [
    {
        id: 'BR-Q-ANO-12345',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        published: new Date('1975-11-07'),
        duration: 348,
        genres: ['Progressive Rock', 'Art Rock', 'Classic Rock', 'Opera Rock'],
        rating: 5
    },
    {
        id: 'T-MJ-T-67890',
        title: 'Thriller',
        artist: 'Michael Jackson',
        album: 'Thriller',
        published: new Date('1982-11-30'),
        duration: 258,
        genres: ['Pop', 'Rock', 'Funk'],
        rating: 5
    },
    {
        id: 'I-JL-I-54321',
        title: 'Imagine',
        artist: 'John Lennon',
        album: 'Imagine',
        published: new Date('1971-09-09'),
        duration: 164,
        genres: ['Pop', 'Rock', 'Folk'],
        rating: 3
    },
    {
        id: 'H-AD-H-98765',
        title: 'Hey Jude',
        artist: 'The Beatles',
        album: 'Hey Jude',
        published: new Date('1968-08-08'),
        duration: 10,
        genres: ['Pop', 'Rock'],
        rating: 4
    },
    {
        id: 'STTM-TGM-BTBAM-11223',
        title: "Swim to the Moon",
        artist: "The Great Misdirect",
        album: "Between the Buried and Me",
        published: new Date('2009-10-27'),
        duration: 1073,
        genres: ['Progressive Metal', 'Metalcore', 'Experimental Metal'],
        rating: 5
    },
    {
        id: 'BL-TW-AH-67890',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        published: new Date('2020-03-20'),
        duration: 200,
        genres: ['Pop', 'Synthwave'],
        rating: 3
    },
    {
        id: 'SOY-ES-D-13579',
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        album: 'Divide',
        published: new Date('2017-01-06'),
        duration: 233,
        genres: ['Pop', 'Dancehall'],
    },
    {
        id: 'ABITW-PF-TW-11223',
        title: 'Another Brick in the Wall',
        artist: 'Pink Floyd',
        album: 'The Wall',
        published: new Date('1979-11-30'),
        duration: 308,
        genres: ['Progressive Rock', 'Art Rock'],
        rating: 4
    },
    {
        id: 'LY-E-8M-24680',
        title: 'Lose Yourself',
        artist: 'Eminem',
        album: '8 Mile',
        published: new Date('2002-10-28'),
        duration: 326,
        genres: ['Hip Hop', 'Rap'],
    },
    {
        id: 'SLTS-N-N-13579',
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        album: 'Nevermind',
        published: new Date('1991-09-10'),
        duration: 301,
        genres: ['Grunge', 'Alternative Rock'],
        rating: 4
    }
]