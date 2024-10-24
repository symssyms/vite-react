import {Box}              from '@mui/material';
import {FC, ReactElement} from 'react';
import {ICast}            from '../models/credit.ts';
import CastItem           from './cast-item.tsx';

interface Props {
    casts: ICast[]
}

const CastItemsList: FC<Props> = ({casts}): ReactElement => {
    console.log(casts)
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 1, flexBasis: '50%'}}>
            <Box component={'h2'}>
                Cast <Box component={'span'} sx={{color: 'darkgray', fontWeight: 'normal'}}>{casts.length}</Box>
            </Box>
            <Box sx={styles}>
                {casts.map((cast: ICast): ReactElement => <CastItem key={cast.name + cast.id} cast={cast}/>)}
            </Box>
        </Box>
    );
};

export default CastItemsList;

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: '10px',
    overflow: 'hidden'
}