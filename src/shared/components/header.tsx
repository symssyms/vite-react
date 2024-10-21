import {Box, SxProps} from "@mui/material";
import {ReactElement} from 'react';
import {INavItem}     from "../models/nav-item.ts";
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
    height: '64px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

}

const navItems: INavItem[] = [
    { name: 'Home', path: '/' },
    {name: 'Movie', path: '/movie/:id'}
]


