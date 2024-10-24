import noUserFemale                                        from '/public/no-user-female.svg';
import noUserMale                                          from '/public/no-user-male.svg';
import {Card, CardContent, CardMedia, SxProps, Typography} from '@mui/material';
import {FC, ReactElement}                                  from 'react';
import {Link}                                              from 'react-router-dom';
import {AVATAR_BASE_URL_XS}                                from '../../lib/constants.ts';
import {ICrew}                                             from '../models/credit.ts';

interface Props {
    crew: ICrew
}

const CrewItem: FC<Props> = ({crew}): ReactElement => {
    const castUrl = crew.profile_path !== null
        ? AVATAR_BASE_URL_XS + crew.profile_path
        : crew.gender === 2 ? noUserMale : noUserFemale;

    return (
        <Link to={'/person/' + crew.id} style={{textDecoration: 'none'}}>
            <Card sx={{display: 'flex', boxShadow: 'none'}}>
                <CardMedia
                    component="img"
                    sx={{width: 66, height: 66, borderRadius: '8px'}}
                    image={castUrl}
                    alt={crew.name}
                />
                <CardContent sx={stylesTitle}>
                    <Typography component="div" variant="h6" sx={{fontWeight: 'bold', lineHeight: 1.2}}>
                        {crew.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{color: 'text.secondary', fontSize: '.8rem'}}
                    >
                        {crew.job}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CrewItem;

const stylesTitle: SxProps = {
    flex: '1 0 auto',
    paddingBottom: '0!important',
    paddingTop: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}