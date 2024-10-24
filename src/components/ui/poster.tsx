import {FC, ReactElement}                                           from 'react';
import {AVATAR_BASE_URL_XL, POSTER_BASE_URL_MD, POSTER_BASE_URL_SM} from '../../lib/constants.ts';

interface Props {
    path: string,
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Poster: FC<Props> = ({path, size = 'sm'}): ReactElement => {
    return (
        <>
            {size === 'sm' && <img src={POSTER_BASE_URL_SM + path} width={58} height={87}/>}
            {size === 'md' && <img src={POSTER_BASE_URL_MD + path} width={88} height={132}/>}
            {size === 'lg' && <img src={POSTER_BASE_URL_MD + path} width={176} height={264}/>}
            {size === 'xl' &&
                <img src={AVATAR_BASE_URL_XL + path} width={300} height={450}/>}
        </>

    );
};

export default Poster;