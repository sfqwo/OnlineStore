export interface IFilmsTop{
  films: Array<IFilm>,
  total: number,
  totalPages: number,
}
export type TGenre = { genre: string };

export interface IFilm{
  filmId: number,
  filmLength: string,
  genres: TGenre[],
  nameEn: string,
  nameRu: string,
  posterUrl: string,
  rating: string,
  year: string
}
