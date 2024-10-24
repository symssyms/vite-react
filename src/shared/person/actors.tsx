import {Box, SxProps}     from '@mui/material';
import {FC, ReactElement} from 'react';
import {useCredits}       from '../../api/api-requests.ts';
import {ICast}            from '../models/credit.ts';
import {ItemTypeEnum}     from '../models/item-type.ts';
import ActorItem          from './actor-item.tsx';

interface Props {
    className?: string,
    itemId: number,
    subject: ItemTypeEnum
}

const Actors: FC<Props> = ({itemId, subject}): ReactElement => {

    const {data: casts, isLoading, error} = useCredits(itemId, subject);

    return (
        <Box sx={{position: 'relative', margin: '0 auto'}}>
            {
                casts !== undefined && casts &&
                <Box sx={styles}>
                    {casts.cast.slice(0, 7)
                        .map((cast: ICast): ReactElement => <ActorItem key={cast.id} cast={cast} movieId={itemId}
                                                                       subject={subject}/>)}

                    <ActorItem movieId={itemId} subject={subject}/>
                </Box>
            }
            {isLoading && <Box component={'h1'}>Loading...</Box>}
            {error && <Box component={'h1'}>{error.name}: {error.message}</Box>}
        </Box>
    );
};

export default Actors;

const styles: SxProps = {
    paddingY: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: '20px',
    overflow: 'hidden'
}