import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import {FC, ReactElement}                         from 'react';
import {Link}                                     from 'react-router-dom';
import {POSTER_BASE_URL_MD}                       from '../../lib/constants.ts';
import {IMovie}                                   from '../models/movie.ts';

interface Props {
    item: IMovie
}

const MovieItem: FC<Props> = ({item}): ReactElement => {
    const posterUrl = POSTER_BASE_URL_MD + item.poster_path;

    return (
        <Link to={`/movie/${item.id}`} style={styles}>
            <Card>
                <CardMedia
                    sx={{height: 263, width: 176}}
                    image={posterUrl}
                    title={item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div"
                                sx={{
                                    marginY: '0',
                                    lineHeight: 1.2,
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    fontFamily: '"Source Sans Pro", Arial, sans-serif'
                                }}>
                        {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {item.release_date}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default MovieItem;

const styles = {
    flexGrow: 1,
    flexShrink: 0,
    maxWidth: 176,
    minWidth: 176,
    flexBasis: '20%',
    textDecoration: 'none',
    display: 'flex',
}