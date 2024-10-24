import {Box, Card, CardContent, CardMedia, SxProps, Typography} from '@mui/material';
import {FC, ReactElement}                                       from 'react';
import {Link}                                                   from 'react-router-dom';
import {AVATAR_BASE_URL_MD}                                     from '../../lib/constants.ts';
import {ICast}                                                  from '../models/credit.ts';

interface Props {
    cast?: ICast,
    movieId: number
}

const ActorItem: FC<Props> = ({cast, movieId}): ReactElement => {
    const profile_path = AVATAR_BASE_URL_MD + cast?.profile_path;
    return (
        <>
            {cast &&
                <Link to={'/person/' + cast.id} style={stylesCard}>
                    <Card sx={{maxWidth: 138}}>
                        <CardMedia
                            sx={{height: 175}}
                            image={profile_path}
                            title={cast.name}
                        />
                        <CardContent sx={stylesTitle}>
                            <Typography gutterBottom variant="h6" component="div" sx={stylesTitle}>
                                {cast.name}
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary', fontSize: '0.8rem'}}>
                                {cast.character}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>}
            {!cast &&
                <Link to={`/movie/${movieId}/cast`} style={stylesCard}>
                    <Box sx={{margin: 'auto'}}>
                        <Box component={'h3'} sx={{padding: '0', width: '10%', color: 'black', textWrap: 'nowrap'}}>View
                            all</Box>
                    </Box>
                </Link>}


        </>
    );
};

export default ActorItem;

const stylesCard = {
    flexGrow: 0,
    flexShrink: 0,
    textDecoration: 'none',
    display: 'flex',
}

const stylesTitle: SxProps = {
    marginY: '0',
    lineHeight: 1.2,
    fontWeight: 'bold',
    fontFamily: '"Source Sans Pro", Arial, sans-serif'
}