import {Box, SxProps} from "@mui/material";
import {ReactElement} from 'react';
import {navItems}     from './lib/constants.ts';
import Navigation     from './navigation.tsx';

const Header = (): ReactElement => {
    return (
        <Box sx={styles} className={'header'}>
            <img src={'/logo.svg'} width={154} height={20}/>
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


