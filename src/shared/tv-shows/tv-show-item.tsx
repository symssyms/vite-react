import {Card, CardContent, CardMedia, SxProps, Typography} from '@mui/material';
import {CSSProperties, FC, ReactElement}                   from 'react';
import {Link}                                              from 'react-router-dom';
import {POSTER_BASE_URL_MD}                                from '../../lib/constants.ts';
import {ITVShow}                                           from '../models/tv-show.ts';

interface Props {
    item: ITVShow
}

const TVShowItem: FC<Props> = ({item}): ReactElement => {
    const posterUrl = POSTER_BASE_URL_MD + item.poster_path;

    return (
        <Link to={`/tv/${item.id}`} style={styles}>
            <Card>
                <CardMedia sx={{height: 263, width: 176}} image={posterUrl} title={item.name}/>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={typographyStyles}>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {item.first_air_date}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default TVShowItem;

const styles: CSSProperties = {
    flexGrow: 1,
    flexShrink: 0,
    maxWidth: 176,
    minWidth: 176,
    flexBasis: '20%',
    textDecoration: 'none',
    display: 'flex',
}

const typographyStyles: SxProps = {
    marginY: '0',
    lineHeight: 1.2,
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: '"Source Sans Pro", Arial, sans-serif'
}