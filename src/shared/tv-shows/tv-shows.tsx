import {Box, Pagination, SxProps}   from "@mui/material";
import {FC, ReactElement, useState} from 'react';
import {useParams}                  from 'react-router-dom';
import {useMovies}                  from '../../api/api-requests.ts';
import Loading                      from '../loading/loading.tsx';
import {ItemTypeEnum}               from '../models/item-type.ts';
import {ITVShow}                    from '../models/tv-show.ts';
import TVShowItem                   from './tv-show-item.tsx';

interface Props {
    className?: string
}

const TVShows: FC<Props> = ({className}): ReactElement => {
    const params = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    const {data, isLoading, error} = useMovies(currentPage, ItemTypeEnum.TVShow, params.topic ?? 'popular');
    const tvShows = data?.results as ITVShow[] | undefined;

    if (error) return <Loading/>;
    if (isLoading || !tvShows) return <Loading/>;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        }}>
            <Box className={className} sx={styles}>
                {tvShows && tvShows.map((item: ITVShow): ReactElement => <TVShowItem key={item.name} item={item}/>)}
            </Box>
            <Pagination
                count={data?.total_pages}
                shape="rounded"
                onChange={(_, page: number) => setCurrentPage(page)}
            />
        </Box>
    );
};

export default TVShows;

const styles: SxProps = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '15px'
};