import {Box, SxProps}            from "@mui/material";
import {ReactElement}            from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Header                    from "./header.tsx";
import Movies                    from './movies.tsx';
import Movie                     from './shared/movie/movie.tsx';
import TVs                       from './tvs.tsx';


function App(): ReactElement {

    return (
        <Box sx={styles} className={'app'}>
            <Header/>
            <Box>
                <Routes>
                    <Route path={'movies/:topic'} element={<Movies/>}/>
                    <Route path={'movie/:id'} element={<Movie/>}/>
                    <Route path={'tv/:topic'} element={<TVs/>}/>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflowY: 'auto',
};