import {Box, Link}        from "@mui/material";
import {FC, ReactElement} from 'react';
import MenuTransitions    from './components/ui/menu.tsx';
import {INavItem}         from './shared/models/nav-item';

interface Props {
    className?: string,
    items?: INavItem[]
}

const Navigation: FC<Props> = ({className, items}): ReactElement => {

    return (
        <Box className={className} sx={{display: 'flex', flexDirection: 'row', flexGrow: 1, justifyContent: 'center'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                {items && items.map((item: INavItem): ReactElement =>
                    !item.children
                        ? <Link href={item.path} key={item.name} sx={{color: 'white', fontWeight: 'bold'}}>
                            {item.name}
                        </Link>
                        : <MenuTransitions item={item} key={item.name}/>)}
            </Box>
        </Box>
    );
};

export default Navigation;