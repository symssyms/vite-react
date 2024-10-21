import {Box, SxProps}     from "@mui/material";
import {FC, ReactElement} from 'react';
import {getPopularMovies} from '../../api/movies.ts';
import {IMovie}           from '../models/movie.ts';
import MovieItem          from './movie-item.tsx';

interface Props {
    className?: string
}

const MainContainer: FC<Props> = ({className}): ReactElement => {

    const {data, isLoading, error} = getPopularMovies();
    return (
        <Box className={className} sx={styles}>
            {isLoading && 'Loading...'}
            {error && 'Error'}
            {data?.results && data?.results.map((item: IMovie) => (
                <MovieItem key={item.title} item={item}/>
            ))}
        </Box>
    );
};

export default MainContainer;

const styles: SxProps = {

    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
};