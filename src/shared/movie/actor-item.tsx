import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {FC, ReactElement}                              from 'react';
import {ICast}                                         from '../models/credit.ts';

interface Props {
    className?: string,
    cast?: ICast
}

const ActorItem: FC<Props> = ({cast}): ReactElement => {
    const profile_path = 'https://media.themoviedb.org/t/p/w138_and_h175_face/' + cast?.profile_path;
    return (
        <>
            {cast && <Card sx={{maxWidth: 138}}>
                <CardMedia
                    sx={{height: 175}}
                    image={profile_path}
                    title={cast.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {cast.name}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {cast.character}
                    </Typography>
                </CardContent>
            </Card>}
            {!cast &&
                <Box sx={{margin: 'auto'}}><Box component={'h3'} sx={{padding: '0', width: '10%',}}>View
                    all...</Box></Box>}


        </>
    );
};

export default ActorItem;