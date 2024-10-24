import {Box}                        from '@mui/material';
import {FC, ReactElement}           from 'react';
import {createDepartmentDictionary} from '../../lib/utils.ts';
import {ICrew}                      from '../models/credit.ts';
import MovieCrewItem                from './movie-crew-item.tsx';

interface Props {
    crews: ICrew[]
}

const MovieCrewItemsList: FC<Props> = ({crews}): ReactElement => {
    console.log(crews);
    const crewsDic = createDepartmentDictionary(crews);
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 1, flexBasis: '50%'}}>
            <Box component={'h2'} sx={{marginBottom: 0}}>
                Crew <Box component={'span'} sx={{color: 'darkgray', fontWeight: 'normal'}}>{crews.length}</Box>
            </Box>
            {
                Object.keys(crewsDic).map((key: string): ReactElement => (
                    <Box key={key}>
                        <Box component={'h4'} sx={{marginY: '10'}}>{key}</Box>
                        <Box sx={styles}>
                            {crewsDic[key].map((crew: ICrew): ReactElement => <MovieCrewItem
                                key={crew.name + crew.id + crew.job}
                                crew={crew}/>)}
                        </Box>
                    </Box>
                ))
            }
        </Box>
    );
};

export default MovieCrewItemsList;

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: '10px',
    overflow: 'hidden'
}