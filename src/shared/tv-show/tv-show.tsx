import {Box, SxProps}           from '@mui/material';
import {FC, ReactElement}       from 'react';
import {useParams}              from 'react-router-dom';
import {useCredits, useDetails} from '../../api/api-requests.ts';
import {ItemTypeEnum}           from '../models/item-type.ts';
import {ITVShowItem}            from '../models/tx-show-item.ts';
import Actors                   from '../person/actors.tsx';
import TVShowHeader             from './tv-show-header.tsx';

const TVShow: FC = (): ReactElement => {

    const params = useParams();
    const tvShowId = Number(params.id);
    const {
        data: tvShowData,
        isLoading: isLoadingMovie,
        error: errorMovie
    } = useDetails(tvShowId, ItemTypeEnum.TVShow);
    const {data: castData} = useCredits(tvShowId, ItemTypeEnum.TVShow);

    const tvShow = tvShowData as ITVShowItem;
    return (
        <Box sx={styles}>
            {
                tvShowData !== undefined && castData !== undefined && !isLoadingMovie && !errorMovie &&
                <Box>
                    <TVShowHeader item={tvShow} crews={castData.crew}/>
                    <Actors itemId={tvShowId} subject={ItemTypeEnum.TVShow}/>
                </Box>
            }
            {isLoadingMovie && <Box component={'h1'}>Loading...</Box>}
            {errorMovie && <Box component={'h1'}>{errorMovie.name}: {errorMovie.message}</Box>}
        </Box>
    );
};

export default TVShow;

const styles: SxProps = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
}