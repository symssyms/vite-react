import {INavItem} from '../shared/models/nav-item.ts';

export const navItems: INavItem[] = [
    {
        name: 'Movies', path: '/movies', children: [
            {name: 'Now Playing', path: 'now_playing'},
            {name: 'Popular', path: 'popular'},
            {name: 'Top Rated', path: 'top_rated'}
        ]
    },
    {
        name: 'TV Shows', path: '/tv', children: [
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