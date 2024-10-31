import {Register} from '@tanstack/react-router';
import {ICredit}  from './credit.ts';

export interface ICreditsResponse {
    isLoading: boolean,
    data: ICredit | undefined,
    error: Register extends { defaultError: infer TError } ? TError : Error | null
}