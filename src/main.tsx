import {createRoot}                          from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import routes                                from './shared/routes/routes.tsx';

const router = createBrowserRouter(routes, {basename: '/vite-react'});


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
