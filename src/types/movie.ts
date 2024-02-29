import { Actor } from './actor';

export type MovieGenre = 'HORROR' | 'ACTION' | 'COMEDY' | 'SCI_FI';

export interface Movie {
  name: string;
  genre: MovieGenre;
  director: string;
  year: number;
  actors: Actor[];
}
