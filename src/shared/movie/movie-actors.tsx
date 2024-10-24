import {Box, SxProps}     from '@mui/material';
import {FC, ReactElement} from 'react';
import {ICast}            from '../models/credit.ts';
import ActorItem          from './actor-item.tsx';

interface Props {
    className?: string,
    casts: ICast[],
    movieId: number,
    error: Error | null,
    isLoading: boolean
}

const MovieActors: FC<Props> = ({casts, movieId, error, isLoading = true}): ReactElement => {
    return (
        <Box sx={{position: 'relative', margin: '0 auto'}}>
            {
                casts !== undefined && casts &&
                <Box sx={styles}>
                    {casts.slice(0, 7)
                        .map((cast: ICast): ReactElement => <ActorItem key={cast.id} cast={cast} movieId={movieId}/>)}

                    {casts.length > 7 && <ActorItem movieId={movieId}/>}
                </Box>
            }
            {isLoading && <Box component={'h1'}>Loading...</Box>}
            {error && <Box component={'h1'}>{error.name}: {error.message}</Box>}
        </Box>
    );
};

export default MovieActors;

const styles: SxProps = {
    paddingY: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: '20px',
    overflow: 'hidden'
}