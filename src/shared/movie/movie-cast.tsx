import {Box}                    from '@mui/material';
import {FC, ReactElement}       from 'react';
import {useParams}              from 'react-router-dom';
import {useCredits, useDetails} from '../../api/api-requests.ts';
import CastItemsList            from '../cast/cast-items-list.tsx';
import CrewItemsList            from '../crew/crew-items-list.tsx';
import Loading                  from '../loading/loading.tsx';
import {ItemTypeEnum}           from '../models/item-type.ts';
import {IMovieItem}             from '../models/movie-item.ts';
import MovieCastHeader          from './movie-cast-header.tsx';


const MovieCast: FC = (): ReactElement => {
    const params = useParams();
    const movieId = Number(params.id);

    const {
        data: movieData,
        isLoading: isLoadingMovie,
        error: errorMovie
    } = useDetails(movieId, ItemTypeEnum.Movie);
    const {data: castData, isLoading: isLoadingCast, error: errorCast} = useCredits(movieId, ItemTypeEnum.Movie);
    const isLoading = isLoadingMovie && isLoadingCast;
    const error = errorMovie || errorCast;
    const movie = movieData as IMovieItem;

    if (!!error || isLoading) return <Loading/>;

    return (
        <>
            {movieData !== undefined && castData !== undefined && !isLoading && !error &&
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    justifyContent: 'space-between'
                }}>
                    <MovieCastHeader movie={movie}/>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingX: '30px',
                        gap: '10px',
                        justifyContent: 'center'
                    }}
                         className={'movieCast'}>
                        <CastItemsList casts={castData.cast}/>
                        <CrewItemsList crews={castData.crew}/>
                    </Box>
                </Box>
            }
        </>
    );
};

export default MovieCast;