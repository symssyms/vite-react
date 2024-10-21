import {Box}              from '@mui/material';
import {FC, ReactElement} from 'react';
import {IMovie}           from '../models/movie.ts';
import Poster             from './ui/poster.tsx';

interface Props {
    className?: string,
    item: IMovie
}

const MovieItem: FC<Props> = ({className, item}): ReactElement => {
    return (
        <Box className={className}>
            <h1>{item.title}</h1>
            <p>{item.overview}</p>
            <Poster path={item.poster_path}/>
        </Box>
    );
};

export default MovieItem;