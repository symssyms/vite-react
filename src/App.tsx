import {Box, SxProps}  from "@mui/material";
import {ReactElement}  from "react";
import {Route, Routes} from "react-router-dom";
import Header          from "./shared/components/header.tsx";
import MainContainer   from "./shared/components/main-container.tsx";
import Movie           from './shared/components/movie.tsx';


function App(): ReactElement {

    return (
        <Box sx={styles} className={'app'}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainContainer/>}/>
                <Route path={'/movie/:id'} element={<Movie/>}/>
            </Routes>
        </Box>
    )
}

export default App


const styles: SxProps = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: '1 0 auto'
};