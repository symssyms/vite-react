import {Box, SxProps}         from '@mui/material';
import {FC, ReactElement}     from 'react';
import {useParams}            from 'react-router-dom';
import {useCredits, useMovie} from '../../api/api-requests.ts';
import MovieActors            from './movie-actors.tsx';
import MovieHeader            from './movie-header.tsx';

const Movie: FC = (): ReactElement => {

    const params = useParams();
    const movieId = Number(params.id);
    const {
        data: movieData,
        isLoading: isLoadingMovie,
        error: errorMovie
    } = useMovie(movieId, params.subject ?? 'movie');
    const {data: castData, isLoading: isLoadingCast, error: errorCast} = useCredits(movieId);
    return (
        <Box sx={styles}>
            {
                movieData !== undefined && castData !== undefined && !isLoadingMovie && !errorMovie &&
                <Box>
                    <MovieHeader item={movieData} crews={castData.crew}/>
                    <MovieActors casts={castData.cast} error={errorCast} isLoading={isLoadingCast} movieId={movieId}/>
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