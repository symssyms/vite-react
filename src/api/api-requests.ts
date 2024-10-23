import {useQuery}   from '@tanstack/react-query';
import axios        from 'axios';
import qs           from 'qs';
import {IMovieItem} from '../shared/models/movie-item.ts';
import {IMovie}     from '../shared/models/movie.ts';
import {IResponse}  from '../shared/models/resporse.ts';


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


export const useMovies = (page: number = 1, subject: string = 'movie', topic: string = 'popular', language: string = 'en-US') => {
    const queryParams = `?${qs.stringify({language, page})}`;
    return useAuthQuery<IResponse<IMovie>>(`/${subject}/${topic}` + queryParams);
}


export const useMovie = (id: number = 1, subject: string = 'movie', language: string = 'en-US') => {
    const queryParams = `?${qs.stringify({language})}`;
    return useAuthQuery<IMovieItem>(`/${subject}/${id}` + queryParams);
}