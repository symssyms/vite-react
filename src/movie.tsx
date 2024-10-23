import {Box, SxProps}     from '@mui/material';
import {FC, ReactElement} from 'react';
import {useParams}        from 'react-router-dom';
import {useMovie}         from './api/api-requests.ts';
import MovieHeader        from './movie-header.tsx';

const Movie: FC = (): ReactElement => {

    const params = useParams();
    const {data, isLoading, error} = useMovie(Number(params.id), params.subject ?? 'movie');

    console.log('movie', {data, isLoading, error});

    return (
        <Box sx={styles}>
            {
                data !== undefined && !isLoading
                    ? <Box>
                        <MovieHeader item={data}/>

                    </Box>
                    : <Box>'Loading...'</Box>
            }
        </Box>


    );
};

export default Movie;

const styles: SxProps = {
    padding: '20px',
}