import {useQuery}  from '@tanstack/react-query';
import axios       from 'axios';
import qs          from 'qs';
import {IMovie}    from '../shared/models/movie.ts';
import {IResponse} from '../shared/models/resporse.ts';


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
        queryFn: () => fetchWithAuth(url)
    });
    return {data, isLoading, error};
};


export const getPopularMovies = (language: string = 'en-US', page: number = 1) => {
    const queryParams = `?${qs.stringify({language, page})}`;
    return useAuthQuery<IResponse<IMovie>>(`/movie/popular` + queryParams);
}

export const getTopRatedMovies = (language: string = 'en-US', page: number = 1) => {
    const queryParams = `?${qs.stringify({language, page})}`;
    return useAuthQuery<IResponse<IMovie>>('/movie/top_rated' + queryParams);
}