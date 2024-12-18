import {Box, SxProps}                              from '@mui/material';
import {FC, ReactElement, useState}                from 'react';
import {Link}                                      from 'react-router-dom';
import Poster                                      from '../../components/ui/poster.tsx';
import {getContrastColor, getDominantColorFromUrl} from '../../lib/utils.ts';
import {IMovieItem}                                from '../models/movie-item.ts';

interface Props {
    movie: IMovieItem
}

const MovieCastHeader: FC<Props> = ({movie}): ReactElement => {
    const [dominantColor, setDominantColor] = useState<string>('200,200,200');
    const [contrastColor, setContrastColor] = useState<string>('200,200,200');
    const releaseYear: string = new Date(movie.release_date).toLocaleDateString('en-US', {year: 'numeric'});

    getDominantColorFromUrl(`https://image.tmdb.org/t/p/w154/${movie.backdrop_path}`)
        .then((color: string) => {
            setDominantColor(color);
            setContrastColor(getContrastColor(color));

        });
    return (

        <Box sx={styles(dominantColor, contrastColor)}>
            <Poster size={'sm'} path={movie.backdrop_path}/>
            <Box>
                <Box component={'h1'} sx={{margin: '0', fontWeight: 'extrabold'}}>{movie.title}&nbsp;
                    <Box component={'span'} sx={{color: 'gray', fontWeight: 'normal'}}>({releaseYear})</Box>
                </Box>
                <Link to={'/movie/' + movie.id}
                      style={{textDecoration: 'none', color: 'inherit', fontSize: '1.2rem', fontWeight: 'bold'}}>
                    ← Back to main
                </Link>
            </Box>
        </Box>
    );
};

export default MovieCastHeader;

const styles = (bgColor: string, color: string): SxProps => (
    {
        marginTop: '20px',
        display: 'flex',
        gap: '20px',
        padding: '15px 40px',
        justifyContent: 'flex-start',
        width: '100%',
        flexDirection: 'row',
        color: `${color}`,
        backgroundImage: `linear-gradient(to right, rgba(${bgColor}, 1) calc((50vw - 170px) - 340px), rgba(${bgColor}, 0.84) 50%, rgba(${bgColor}, 0.84) 100%)`
    }
);