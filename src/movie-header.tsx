import {Box, SxProps}                                   from '@mui/material';
import {FC, ReactElement}                               from 'react';
import {buildDictionary, formatMinutesToHours, IPerson} from './lib/utils.ts';
import Poster                                           from './poster.tsx';
import {ICrew}                                          from './shared/models/credit.ts';
import {IMovieItem}                                     from './shared/models/movie-item.ts';

interface Props {
    className?: string,
    item: IMovieItem,
    crews: ICrew[]
}

const MovieHeader: FC<Props> = ({item, crews}): ReactElement => {

    const releaseYear: string = new Date(item.release_date).toLocaleDateString('en-US', {year: 'numeric'});
    const releaseDate: string = new Date(item.release_date).toLocaleDateString('en-US', {
        dateStyle: 'short'
    });

    const bgImage = `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces//${item.backdrop_path} norepeat')`;

    const directing: Record<string, string[]> = buildDictionary(crews?.filter((e: ICrew) => e.known_for_department === 'Directing')
        .map((e: ICrew) => ({name: e.name, department: e.department} as IPerson)).slice(0, 3));

    console.log(directing)

    console.log('crew', directing)
    return (
        <Box
            sx={{backgroundImage: bgImage}}>
            <Box sx={styles}>
                <Poster size={'xl'} path={item.backdrop_path}/>
                <Box sx={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    justifyContent: 'space-between'
                }}>
                    <Box component={'h1'} sx={{margin: '0'}}>{item.title}&nbsp;
                        <Box component={'span'} sx={{color: 'gray', fontWeight: 'normal'}}>({releaseYear})</Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        width: '100%',
                        flexDirection: 'row',
                        gap: '20px'
                    }}>
                        <Box>
                            <span>{releaseDate}</span>&nbsp;
                            <span>({item.origin_country})</span>
                        </Box>
                        <Box component={'span'} sx={{marginX: '10px'}}>●</Box>
                        <Box>
                            {item.genres.map(genre => genre.name).join(', ')}
                        </Box>
                        <Box component={'span'} sx={{marginX: '10px'}}>●</Box>
                        <Box>{formatMinutesToHours(item.runtime)}</Box>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                        <span>{item.vote_average}</span>
                        <span>{item.status}</span>
                    </Box>
                    <Box>
                        <Box component={'h3'}>
                            Overview
                        </Box>
                        <p>{item.overview}</p>
                    </Box>
                    <Box>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                            {Object.keys(directing).map(key => {
                                return (
                                    <Box key={key} sx={{textWrap: 'wrap'}}>
                                        <Box component={'h4'} sx={{marginBottom: '0'}}>{key}</Box>
                                        <Box component={'p'}
                                             sx={{margin: '0', padding: '0'}}>{directing[key].join(', ')}</Box>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};

export default MovieHeader;

const styles: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    color: 'white',
    backgroundImage: `linear-gradient(to right, rgba(10.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(10.5, 31.5, 31.5, 0.84) 50%, rgba(10.5, 31.5, 31.5, 0.84) 100%)`
};