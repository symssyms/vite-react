import {Box}              from '@mui/material';
import {FC, ReactElement} from 'react';
import {Link}             from 'react-router-dom';
import Poster             from './components/ui/poster.tsx';
import {IMovie}           from './shared/models/movie.ts';

interface Props {
    className?: string,
    item: IMovie
}

const MovieItem: FC<Props> = ({className, item}): ReactElement =>
    <Link to={`/movie/${item.id}`}>
        <Box className={className} sx={{width: '22%', flex: '1 1 auto'}}>
            <Poster path={item.poster_path} size={'lg'}/>
            <p style={{textWrap: 'wrap'}}>{item.title}</p>
        </Box>
    </Link>;

export default MovieItem;