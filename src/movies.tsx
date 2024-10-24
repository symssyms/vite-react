import {Box, Pagination, SxProps}   from "@mui/material";
import {FC, ReactElement, useState} from 'react';
import {useParams}                  from 'react-router-dom';
import {useMovies}                  from './api/api-requests.ts';
import MovieItem                    from './movie-item';
import {IMovie}                     from './shared/models/movie';

interface Props {
    className?: string
}

const Movies: FC<Props> = ({className}): ReactElement => {
    const params = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const {data, isLoading, error} = useMovies(currentPage, params.subject ?? 'movie', params.topic ?? 'popular');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        }}>
            <Box className={className} sx={styles}>
                {data?.results && data?.results.map((item: IMovie): ReactElement => (
                    <MovieItem key={item.title} item={item}/>
                ))}
                {isLoading && 'Loading...'}
                {error && 'Error'}
            </Box>

            <Pagination
                count={data?.total_pages}
                shape="rounded"
                onChange={(_, page: number) => setCurrentPage(page)}
            />
        </Box>
    );
};

export default Movies;

const styles: SxProps = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '15px'
};