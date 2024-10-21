import {Box, Link}        from "@mui/material";
import {FC, ReactElement} from 'react';
import {INavItem}         from "../models/nav-item.ts";

interface Props {
    className?: string,
    items?: INavItem[]
}

const Navigation: FC<Props> = ({className, items}): ReactElement => {
    return (
        <Box className={className} sx={{display:'flex', flexDirection: 'row', flexGrow: 1, justifyContent:'center'}}>
            <Box sx={{display:'flex', flexDirection: 'row', gap: '10px'}}>
                {items && items.map((item) => (
                    <Link href={item.path} key={item.name}>
                        {item.name}
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Navigation;