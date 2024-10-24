import {IGenre}             from './genre.ts';
import {IProductionCompany} from './production-company.ts';
import {IProductionCountry} from './production-country.ts';
import {ISpokenLanguage}    from './spoken-language.ts';

export interface IMovieItem {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: IGenre[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: IProductionCompany[]
    production_countries: IProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: ISpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
