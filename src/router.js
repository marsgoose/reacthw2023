import {createBrowserRouter, Navigate} from "react-router-dom";

import {Mainlayout} from './layouts/Mainlayout';
import {TodosPage} from './pages/TodosPage';
import {AlbumsPage} from './pages/AlbumsPage';
import {CommentsPage} from './pages/CommentsPage';
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {
        path: '', element: <Mainlayout/>, children:[
            {index: true, element: <Navigate to={'comments'}/>},
            {
                path: 'todos', element:<TodosPage/>
            },
            {
                path: 'albums', element:<AlbumsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>, children:[

                    {
                        path: 'posts', element: <PostPage/>
                    }
            ]
            }]




    }
]);


export {
    router
}