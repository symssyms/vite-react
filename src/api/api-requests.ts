import {useQuery}     from '@tanstack/react-query';
import axios          from 'axios';
import qs             from 'qs';
import {ICredit}      from '../shared/models/credit.ts';
import {ItemTypeEnum} from '../shared/models/item-type.ts';
import {IMovieItem}   from '../shared/models/movie-item.ts';
import {IMovie}       from '../shared/models/movie.ts';
import {IResponse}    from '../shared/models/resporse.ts';
import {ITVShow}      from '../shared/models/tv-show.ts';
import {ITVShowItem}  from '../shared/models/tx-show-item.ts';


const fetchWithAuth = async (url: string) => {
    url = import.meta.env.VITE_BASE_API_URL + url;
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            Accept: 'application/json',
        },
    });
    return response.data;
};

const useAuthQuery = <T>(url: string = '/') => {
    const {data, isLoading, error} = useQuery<T>({
        queryKey: ['data', url],
        queryFn: () => fetchWithAuth(url),
        staleTime: 1000 * 60,
    });
    return {data, isLoading, error};
};


export const useMovies = (page: number = 1, subject: ItemTypeEnum, topic: string = 'popular', language: string = 'en-US') => {
    const queryParams = `?${qs.stringify({language, page})}`;
    return useAuthQuery<IResponse<IMovie | ITVShow>>(`/${subject}/${topic}` + queryParams);
}


export const useDetails = (id: number = 1, subject: ItemTypeEnum, language: string = 'en-US') => {
    const queryParams = `?${qs.stringify({language})}`;
    return useAuthQuery<IMovieItem | ITVShowItem>(`/${subject}/${id}` + queryParams);
}

export const useCredits = (id: number = 1, subject: ItemTypeEnum, language: string = 'en-US') => {
    const queryParams = `?${qs.stringify({language})}`;
    return useAuthQuery<ICredit>(`/${subject}/${id}/credits` + queryParams);
}