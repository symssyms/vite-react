import {Box, SxProps}                     from "@mui/material";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactElement}                     from "react";
import {Outlet}                           from 'react-router-dom';
import Header                             from "./header.tsx";

const queryClient = new QueryClient();

const App = (): ReactElement => (

    <QueryClientProvider client={queryClient}>
        <Box sx={styles} className={'app'}>
            <Header/>
            <Box sx={{width: '100%'}}>
                <Outlet/>
            </Box>
        </Box>
    </QueryClientProvider>

);

export default App;

const styles: SxProps = {
    width: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflowY: 'auto',
};