import {FC, ReactElement} from 'react';

interface Props {
    path: string,
    size?: 'md' | 'lg'
}

const ActorAvatar: FC<Props> = ({path, size = 'md'}): ReactElement => {
    return (
        <>
            {size === 'md' &&
                <img src={'https://media.themoviedb.org/t/p/w138_and_h175_face/' + path} width={138} height={175}/>}
            {size === 'lg' &&
                <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + path} width={300} height={450}/>}
        </>

    );
};

export default ActorAvatar;