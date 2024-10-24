import {Box}                  from '@mui/material';
import {FC, ReactElement}     from 'react';
import {useParams}            from 'react-router-dom';
import {useCredits, useMovie} from '../../api/api-requests.ts';
import MovieCastHeader        from './movie-cast-header.tsx';
import MovieCastItemsList     from './movie-cast-items-list.tsx';
import MovieCrewItemsList     from './movie-crew-items-list.tsx';


const MovieCast: FC = (): ReactElement => {
    const params = useParams();

    const movieId = Number(params.id);
    const {
        data: movieData,
        isLoading: isLoadingMovie,
        error: errorMovie
    } = useMovie(movieId, params.subject ?? 'movie');
    const {data: castData, isLoading: isLoadingCast, error: errorCast} = useCredits(movieId);

    return (
        <>
            {movieData !== undefined && castData !== undefined && !isLoadingMovie && !isLoadingCast && !errorMovie && !errorCast &&
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    justifyContent: 'space-between'
                }}>
                    <MovieCastHeader movie={movieData}/>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingX: '30px',
                        gap: '10px',
                        justifyContent: 'center'
                    }}
                         className={'movieCast'}>
                        <MovieCastItemsList casts={castData.cast}/>
                        <MovieCrewItemsList crews={castData.crew}/>
                    </Box>
                </Box>
            }
            {!!errorMovie || !!errorCast || isLoadingCast || isLoadingMovie && <Box component={'h1'}>Loading...</Box>}
        </>
    );
};

export default MovieCast;