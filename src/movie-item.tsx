import {Box}              from '@mui/material';
import Link               from '@mui/material/Link';
import {FC, ReactElement} from 'react';
import Poster             from './poster.tsx';
import {IMovie}           from './shared/models/movie.ts';

interface Props {
    className?: string,
    item: IMovie
}

const MovieItem: FC<Props> = ({className, item}): ReactElement => {
    const link = `/movie/${item.id}`;
    console.log('link: ', link);
    return (
        <Link href={`/movie/${item.id}`} underline="none">
            <Box className={className} sx={{width: '22%', flex: '1 1 auto'}}>
                <Poster path={item.poster_path} size={'lg'}/>
                <p style={{textWrap: 'wrap'}}>{item.title}</p>
            </Box>
        </Link>
    );
};

export default MovieItem;