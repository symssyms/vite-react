import {lazy, ReactElement, Suspense} from 'react';
import {Navigate, RouteObject}        from 'react-router-dom';
import Loading                        from '../loading/loading.tsx';

const loadable = (factory: () => Promise<any>) => (): ReactElement => {
    const Component = lazy(factory);
    return (
        <Suspense fallback={<Loading/>}>
            <Component/>
        </Suspense>
    );
};

const App = loadable(() => import('../../App.tsx'));
const Movies = loadable(() => import('../movies/movies.tsx'));
const MovieCast = loadable(() => import('../movie/movie-cast.tsx'));
const Movie = loadable(() => import('../movie/movie.tsx'));
const TVShowCast = loadable(() => import('../tv-show/tv-show-cast.tsx'));
const TVShow = loadable(() => import('../tv-show/tv-show.tsx'));
const TVShows = loadable(() => import('../tv-shows/tv-shows.tsx'));

const routes: RouteObject[] =
    [{
        Component: App,
        children: [
            {
                path: 'movies/:topic?', lazy: async () => ({element: await <Movies/>})
            },
            {path: 'movie/:id/cast', lazy: async () => ({element: await <MovieCast/>})},
            {path: 'tv/:id/cast', lazy: async () => ({element: await <TVShowCast/>})},
            {path: 'movie/:id?', lazy: async () => ({element: await <Movie/>})},
            {path: 'tv-shows/:topic?', lazy: async () => ({element: await <TVShows/>})},
            {path: 'tv/:id?', lazy: async () => ({element: await <TVShow/>})},
            {path: '/', element: <Navigate to={'movies/popular'}/>}
        ]
    }];

export default routes;