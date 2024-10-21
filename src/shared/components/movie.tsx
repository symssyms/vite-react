import {FC, ReactElement} from 'react';

interface Props {
    className?: string
}

const Movie: FC<Props> = ({className}): ReactElement => {
    return (
        <div className={className}>
            <h1>Movie</h1>
        </div>
    );
};

export default Movie;