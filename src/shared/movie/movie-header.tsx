import {Box, SxProps}               from '@mui/material';
import {FC, ReactElement, useState} from 'react';
import Poster                       from '../../components/ui/poster.tsx';
import {
    POSTER_BASE_URL_FOR_DOMINANT_COLOR,
    POSTER_BASE_URL_XXL
}                                   from '../../lib/constants.ts';
import {
    buildDictionary,
    formatMinutesToHours,
    getContrastColor,
    getDominantColorFromUrl,
    IPerson
}                                   from '../../lib/utils.ts';
import {
    ICrew
}                                   from '../models/credit.ts';
import {
    IMovieItem
}                                   from '../models/movie-item.ts';

interface Props {
    className?: string,
    item: IMovieItem,
    crews: ICrew[]
}

const MovieHeader: FC<Props> = ({item, crews}): ReactElement => {

    const [dominantColor, setDominantColor] = useState<string>('200,200,200');
    const [contrastColor, setContrastColor] = useState<string>('200,200,200');
    const releaseYear: string = new Date(item.release_date).toLocaleDateString('en-US', {year: 'numeric'});
    const releaseDate: string = new Date(item.release_date).toLocaleDateString('en-US', {dateStyle: 'short'});

    const bgImage = `url('${POSTER_BASE_URL_XXL}/${item.backdrop_path} norepeat')`;
    getDominantColorFromUrl(`${POSTER_BASE_URL_FOR_DOMINANT_COLOR}/${item.backdrop_path}`)
        .then((color: string) => {
            setDominantColor(color);
            setContrastColor(getContrastColor(color));

        });

    const directing: Record<string, string[]> = buildDictionary(crews?.filter((e: ICrew) => e.known_for_department === 'Directing')
        .map((e: ICrew) => ({name: e.name, department: e.department} as IPerson)).slice(0, 3));

    return (
        <Box
            sx={{backgroundImage: bgImage}}>
            <Box sx={styles(dominantColor, contrastColor)}>
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

const styles = (bgColor: string, color: string): SxProps => (
    {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        color: `${color}`,
        backgroundImage: `linear-gradient(to right, rgba(${bgColor}, 1) calc((50vw - 170px) - 340px), rgba(${bgColor}, 0.84) 50%, rgba(${bgColor}, 0.84) 100%)`
    }
);