import App from "../App";
import EasyGame from "../pages/EasyGame";

import Home from "../pages/Home";
import Root from "../pages/root";

const routes = [
    {
        path: '/',
        element: <Root/>,
        errorElement: '',
        children: [
            {
                path: '/',
                index: true,
                Component: Home, 
            },
            {
                path: '/easy/:name',
                Component: EasyGame,
            }
        ]
    }
]

export { routes }