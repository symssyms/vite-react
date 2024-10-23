import {Box, SxProps}         from '@mui/material';
import {FC, ReactElement}     from 'react';
import {formatMinutesToHours} from './lib/utils.ts';
import Poster                 from './poster.tsx';
import {IMovieItem}           from './shared/models/movie-item.ts';

interface Props {
    className?: string,
    item: IMovieItem
}

const MovieHeader: FC<Props> = ({item}): ReactElement => {

    const releaseYear: string = new Date(item.release_date).toLocaleDateString('en-US', {year: 'numeric'});
    const releaseDate: string = new Date(item.release_date).toLocaleDateString('en-US', {
        dateStyle: 'short'
    });

    const bgImage = `url('https://media.themoviedb.org/t/p/w300_and_h450_multi_faces_filter(blur)/${item.poster_path} norepeat')`;

    return (
        <Box
            sx={{backgroundImage: bgImage}}>
            <Box sx={styles}>
                <Poster size={'xl'} path={item.backdrop_path}/>
                <Box sx={{padding: '20px'}}>
                    <h1>{item.title}&nbsp;
                        <Box component={'span'} sx={{color: 'gray', fontWeight: 'normal'}}>({releaseYear})</Box>
                    </h1>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        flexDirection: 'row',
                        gap: '20px'
                    }}>
                        <Box>
                            <span>{releaseDate}</span>&nbsp;
                            <span>({item.origin_country})</span>
                        </Box>
                        <Box>
                            {item.genres.map(genre => genre.name).join(', ')}
                        </Box>
                        <Box>{formatMinutesToHours(item.runtime)}</Box>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                        <span>{item.vote_average}</span>
                        <span>{item.status}</span>
                    </Box>
                    <Box>
                        <Box component={'h3'}>
                            Overview
                        </Box>
                        <p>{item.overview}</p>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};

export default MovieHeader;

const styles: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    color: 'white',
    backgroundImage: `linear-gradient(to right, rgba(10.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(10.5, 31.5, 31.5, 0.84) 50%, rgba(10.5, 31.5, 31.5, 0.84) 100%)`
};