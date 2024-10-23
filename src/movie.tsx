import {FC, ReactElement} from 'react';
import {useParams}        from 'react-router-dom';
import {useMovie}         from './api/movies.ts';

interface Props {
    className?: string
}

const Movie: FC<Props> = ({className}): ReactElement => {

    const params = useParams();
    const {data, isLoading, error} = useMovie(Number(params.id), params.subject ?? 'movie');

    console.log('movie', {data, isLoading, error});

    return (
        <div className={className}>
            <h1>Movie</h1>
        </div>
    );
};

export default Movie;