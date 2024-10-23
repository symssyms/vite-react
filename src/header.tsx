import {Box, SxProps} from "@mui/material";
import {ReactElement} from 'react';
import {navItems}     from './lib/constants.ts';
import Navigation     from './navigation.tsx';

const Header = (): ReactElement => {
    return (
        <Box sx={styles} className={'header'}>
            <img
                src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'}
                width={154} height={20}/>
            <Navigation items={navItems}/>
        </Box>
    );
};

export default Header;

const styles: SxProps = {
    minHeight: '64px',
    height: '64px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
    background: 'rgb(3,37,65)',
    zIndex: 10
}


