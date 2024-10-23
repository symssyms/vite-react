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
        <>
            <Box className={className} sx={styles}>
                {isLoading && 'Loading...'}
                {error && 'Error'}
                {data?.results && data?.results.map((item: IMovie): ReactElement => (
                    <MovieItem key={item.title} item={item}/>
                ))}
            </Box>

            <Pagination
                count={data?.total_pages}
                shape="rounded"
                onChange={(_, page: number) => setCurrentPage(page)}
            />
        </>
    );
};

export default Movies;

const styles: SxProps = {
    padding: '20px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '30%',
    gap: '15px'
};