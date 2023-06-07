export interface IFilmsTop {
  films: Array<IFilm>;
  total: number;
  totalPages: number;
}

export interface IFilms {
  items: Array<IFilm>;
  total: number;
  totalPages: number;
}

export type TGenre = { genre: string };

interface ICountry {
  country: string;
}

export interface IFilm {
  filmId: number;
  filmLength: string;
  genres: TGenre[];
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  rating: string;
  year: string;
  description: string;
  posterUrlPreview: string;
  countries: ICountry[];
  slogan: string;
}

export interface IFilmImage {
  imageUrl: string;
  previewUrl: string;
}

export interface IFilmAward {
  name: string;
  win: boolean;
  imageUrl?: string;
  nominationName: string;
  year: number;
  persons: any[];
}

export interface IBoxOffice {
  amount: number;
  symbol: string;
  type: 'BUDGET' | 'USA' | 'WORLD';
}

export enum EGenres {
  triller = 'Триллер',
  drama = 'Драма',
  criminal = 'Криминал',
  melodrama = 'Мелодрама',
  kids = 'Детские',
}
