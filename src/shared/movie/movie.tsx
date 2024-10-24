import {Box, SxProps}           from '@mui/material';
import {FC, ReactElement}       from 'react';
import {useParams}              from 'react-router-dom';
import {useCredits, useDetails} from '../../api/api-requests.ts';
import {ItemTypeEnum}           from '../models/item-type.ts';
import {IMovieItem}             from '../models/movie-item.ts';
import Actors                   from '../person/actors.tsx';
import MovieHeader              from './movie-header.tsx';

const Movie: FC = (): ReactElement => {

    const params = useParams();
    const movieId = Number(params.id);
    const {
        data: movieData,
        isLoading: isLoadingMovie,
        error: errorMovie
    } = useDetails(movieId, ItemTypeEnum.Movie);
    const {data: castData} = useCredits(movieId, ItemTypeEnum.Movie);

    const movie = movieData as IMovieItem;
    return (
        <Box sx={styles}>
            {
                movieData !== undefined && castData !== undefined && !isLoadingMovie && !errorMovie &&
                <Box>
                    <MovieHeader item={movie} crews={castData.crew}/>
                    <Actors itemId={movieId} subject={ItemTypeEnum.Movie}/>
                </Box>
            }
            {isLoadingMovie && <Box component={'h1'}>Loading...</Box>}
            {errorMovie && <Box component={'h1'}>{errorMovie.name}: {errorMovie.message}</Box>}
        </Box>
    );
};

export default Movie;

const styles: SxProps = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
}