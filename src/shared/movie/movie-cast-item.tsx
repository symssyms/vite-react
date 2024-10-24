import {Card, CardContent, CardMedia, SxProps, Typography} from '@mui/material';
import {FC, ReactElement}                                  from 'react';
import {Link}                                              from 'react-router-dom';
import {AVATAR_BASE_URL_XS}                                from '../../lib/constants.ts';
import {ICast}                                             from '../models/credit.ts';

interface Props {
    cast: ICast
}

const MovieCastItem: FC<Props> = ({cast}): ReactElement => {

    const castUrl = cast.profile_path !== null
        ? AVATAR_BASE_URL_XS + cast.profile_path
        : cast.gender === 1 ? '/no-user-male.svg' : '/no-user-female.svg';

    return (
        <Link to={'/person/' + cast.id} style={{textDecoration: 'none'}}>
            <Card sx={{display: 'flex', boxShadow: 'none'}}>
                <CardMedia
                    component="img"
                    sx={{width: 66, height: 66, borderRadius: '8px'}}
                    image={castUrl}
                    alt={cast.name}
                />
                <CardContent sx={stylesTitle}>
                    <Typography component="div" variant="h6" sx={{fontWeight: 'bold', lineHeight: 1.2}}>
                        {cast.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{color: 'text.secondary'}}
                    >
                        {cast.character}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default MovieCastItem;

const stylesTitle: SxProps = {
    flex: '1 0 auto',
    paddingBottom: '0!important',
    paddingTop: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}