import {Box, Pagination, SxProps} from "@mui/material";
import React, {FC, ReactElement}  from 'react';
import {useParams}                from 'react-router-dom';
import {useMovies}                from './api/movies.ts';
import MovieItem                  from './movie-item';
import {IMovie}                   from './shared/models/movie';

interface Props {
    className?: string
}

const TVs: FC<Props> = ({className}): ReactElement => {
    const params = useParams();
    console.log('params', params);
    const [currentPage, setCurrentPage] = React.useState(1);

    const {data, isLoading, error} = useMovies(currentPage, params.subject ?? 'tv', params.topic ?? 'popular');

    return (
        <Box className={className} sx={styles}>
            {isLoading && 'Loading...'}
            {error && 'Error'}
            {data?.results && data?.results.map((item: IMovie): ReactElement => (
                <MovieItem key={item.title} item={item}/>
            ))}
            <Pagination count={data?.total_pages} shape="rounded" onChange={(_, page: number) => setCurrentPage(page)}/>
        </Box>
    );
};

export default TVs;

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