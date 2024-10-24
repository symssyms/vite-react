import {Box}                    from '@mui/material';
import {FC, ReactElement}       from 'react';
import {useParams}              from 'react-router-dom';
import {useCredits, useDetails} from '../../api/api-requests.ts';
import CastItemsList            from '../cast/cast-items-list.tsx';
import CrewItemsList            from '../crew/crew-items-list.tsx';
import {ItemTypeEnum}           from '../models/item-type.ts';
import {ITVShowItem}            from '../models/tx-show-item.ts';
import TVShowCastHeader         from './tv-show-cast-header.tsx';


const TVShowCast: FC = (): ReactElement => {
    const params = useParams();

    const tvShowId = Number(params.id);
    const {
        data: tvShowData,
        isLoading: isLoadingMovie,
        error: errorMovie
    } = useDetails(tvShowId, ItemTypeEnum.TVShow);
    const {data: castData, isLoading: isLoadingCast, error: errorCast} = useCredits(tvShowId, ItemTypeEnum.TVShow);
    const tvShow = tvShowData as ITVShowItem;

    return (
        <>
            {tvShowData !== undefined && castData !== undefined && !isLoadingMovie && !isLoadingCast && !errorMovie && !errorCast &&
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    justifyContent: 'space-between'
                }}>
                    <TVShowCastHeader tvShow={tvShow}/>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingX: '30px',
                        gap: '10px',
                        justifyContent: 'center'
                    }}
                         className={'movieCast'}>
                        <CastItemsList casts={castData.cast}/>
                        <CrewItemsList crews={castData.crew}/>
                    </Box>
                </Box>
            }
            {!!errorMovie || !!errorCast || isLoadingCast || isLoadingMovie && <Box component={'h1'}>Loading...</Box>}
        </>
    );
};

export default TVShowCast;