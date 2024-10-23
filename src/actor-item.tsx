import {Box}              from '@mui/material';
import {FC, ReactElement} from 'react';
import Poster             from './poster.tsx';
import {ICast}            from './shared/models/credit.ts';

interface Props {
    className?: string,
    cast?: ICast
}

const ActorItem: FC<Props> = ({cast}): ReactElement => {
    const profile_path = 'https://media.themoviedb.org/t/p/w138_and_h175_face/' + cast?.profile_path;
    return (
        <>
            {cast && <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '5px',
                flexGrow: 0,
            }}>
                <Poster path={profile_path} size={'md'}/>
                <Box component={'h4'} sx={{margin: '0', padding: '0'}}>{cast.name}</Box>
                <Box component={'p'} sx={{margin: '0', padding: '0', width: '100%'}}>{cast.character}</Box>
            </Box>}
            {!cast &&
                <Box><Box component={'h3'} sx={{margin: '0 auto', padding: '0', width: '10%',}}>View all...</Box></Box>}
        </>
    );
};

export default ActorItem;