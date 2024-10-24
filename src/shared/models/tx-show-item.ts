import {IGenre}             from './genre.ts';
import {IProductionCompany} from './production-company.ts';
import {IProductionCountry} from './production-country.ts';
import {ISpokenLanguage}    from './spoken-language.ts';

export interface ITVShowItem {
    adult: boolean
    backdrop_path: string
    created_by: any[]
    episode_run_time: number[]
    first_air_date: string
    genres: IGenre[]
    homepage: string
    id: number
    in_production: boolean
    languages: string[]
    last_air_date: string
    last_episode_to_air: ILastEpisodeToAir
    name: string
    next_episode_to_air: INextEpisodeToAir
    networks: INetwork[]
    number_of_episodes: number
    number_of_seasons: number
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: IProductionCompany[]
    production_countries: IProductionCountry[]
    seasons: ISeason[]
    spoken_languages: ISpokenLanguage[]
    status: string
    tagline: string
    type: string
    vote_average: number
    vote_count: number
}

export interface ILastEpisodeToAir {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime: any
    season_number: number
    show_id: number
    still_path: string
}

export interface INextEpisodeToAir {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime: any
    season_number: number
    show_id: number
    still_path: string
}

export interface INetwork {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface ISeason {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    vote_average: number
}
