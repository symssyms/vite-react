import {FC, ReactElement} from 'react';

interface Props {
    path: string,
    size?: 'sm'| 'md'| 'lg'
}

const Poster: FC<Props> = ({path, size = 'sm'}): ReactElement => {
    return (
        <>
            {size === 'sm' && <img src={'https://image.tmdb.org/t/p/w154/' + path} width={44} height={66}/>}
            {size === 'md' && <img src={'https://image.tmdb.org/t/p/w154/' + path} width={88} height={132}/>}
            {size === 'lg' && <img src={'https://image.tmdb.org/t/p/w154/' + path} width={440} height={660}/>}
        </>

    );
};

export default Poster;