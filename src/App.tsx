import {Box, SxProps}            from "@mui/material";
import {ReactElement}            from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Header                    from "./header.tsx";
import MovieCast                 from './shared/movie/movie-cast.tsx';
import Movie                     from './shared/movie/movie.tsx';
import Movies                    from './shared/movies/movies.tsx';
import TVShowCast                from './shared/tv-show/tv-show-cast.tsx';
import TVShow                    from './shared/tv-show/tv-show.tsx';
import TVShows                   from './shared/tv-shows/tv-shows.tsx';


function App(): ReactElement {

    return (
        <Box sx={styles} className={'app'}>
            <Header/>
            <Box sx={{width: '100%'}}>
                <Routes>
                    <Route path={'movies/:topic'} element={<Movies/>}/>
                    <Route path={'movie/:id/cast'} element={<MovieCast/>}/>
                    <Route path={'tv/:id/cast'} element={<TVShowCast/>}/>
                    <Route path={'movie/:id'} element={<Movie/>}/>
                    <Route path={'tv-shows/:topic'} element={<TVShows/>}/>
                    <Route path={'tv/:id'} element={<TVShow/>}/>
                    <Route path={'/'} element={<Navigate to={'movies/popular'}/>}/>
                </Routes>
            </Box>
        </Box>
    )
}

export default App

const styles: SxProps = {
    width: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflowY: 'auto',
};