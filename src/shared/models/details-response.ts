import {Register}    from '@tanstack/react-router';
import {IMovieItem}  from './movie-item.ts';
import {ITVShowItem} from './tx-show-item.ts';

export interface IDetailsResponse {
    isLoading: boolean,
    data: IMovieItem | ITVShowItem,
    error: Register extends { defaultError: infer TError } ? TError : Error | null
}