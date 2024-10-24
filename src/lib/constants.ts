import {INavItem} from '../shared/models/nav-item.ts';

export const AVATAR_BASE_URL_XS: string = 'https://media.themoviedb.org/t/p/w66_and_h66_face/';
export const AVATAR_BASE_URL_MD: string = 'https://media.themoviedb.org/t/p/w138_and_h175_face/';
export const AVATAR_BASE_URL_XL: string = 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/';
export const POSTER_BASE_URL_SM: string = 'https://media.themoviedb.org/t/p/w58_and_h87_face/';
export const POSTER_BASE_URL_MD: string = 'https://image.tmdb.org/t/p/w154/';
export const POSTER_BASE_URL_XXL: string = 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces';

export const navItems: INavItem[] = [
    {
        name: 'Movies', path: '/movies', children: [
            {name: 'Now Playing', path: 'now_playing'},
            {name: 'Popular', path: 'popular'},
            {name: 'Top Rated', path: 'top_rated'}
        ]
    },
    {
        name: 'TV Shows', path: '/tv-shows', children: [
            {name: 'Airing Today', path: 'airing_today'},
            {name: 'On The Air', path: 'on_the_air'},
            {name: 'Popular', path: 'popular'},
            {name: 'Top Rated', path: 'top_rated'}
        ]
    },
    {
        name: 'People', path: '/', children: [
            {name: 'Popular People', path: 'person'}
        ]
    }
];