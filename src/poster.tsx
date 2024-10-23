import {FC, ReactElement} from 'react';

interface Props {
    path: string,
    size?: 'sm'| 'md'| 'lg' | 'xl'
}

const Poster: FC<Props> = ({path, size = 'sm'}): ReactElement => {
    return (
        <>
            {size === 'sm' && <img src={'https://image.tmdb.org/t/p/w154/' + path} width={44} height={66}/>}
            {size === 'md' && <img src={'https://image.tmdb.org/t/p/w154/' + path} width={88} height={132}/>}
            {size === 'lg' && <img src={'https://image.tmdb.org/t/p/w154/' + path} width={176} height={264}/>}
            {size === 'xl' &&
                <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + path} width={300} height={450}/>}
        </>

    );
};

export default Poster;