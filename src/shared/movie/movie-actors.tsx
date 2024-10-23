import {Box, SxProps}     from '@mui/material';
import {FC, ReactElement} from 'react';
import ActorItem          from '../../actor-item.tsx';
import {ICast}            from '../models/credit.ts';

interface Props {
    className?: string,
    casts: ICast[],
    error: Error | null,
    isLoading: boolean
}

const MovieActors: FC<Props> = ({casts, error, isLoading = true}): ReactElement => {
    return (
        <Box sx={{position: 'relative', margin: '0 auto'}}>
            {
                casts !== undefined && casts &&
                <Box sx={styles}>
                    {casts.slice(0, 7).map((cast: ICast): ReactElement => <ActorItem key={cast.id} cast={cast}/>)}
                    <ActorItem/>
                </Box>
            }
            {isLoading && <Box component={'h1'}>Loading...</Box>}
            {error && <Box component={'h1'}>{error.name}: {error.message}</Box>}
        </Box>
    );
};

export default MovieActors;

const styles: SxProps = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexBasis: '20%',
    gap: '10px',
    overflow: 'hidden'
}