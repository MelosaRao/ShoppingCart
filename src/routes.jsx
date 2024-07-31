import App from "./App";
import Shop from "./Components/Shop";
import ErrorPage from "./ErrorPage";
import ProductDetails from "./Components/ProductDetails";
import Home from "./Components/Home";
import { element } from "prop-types";

const routes = [
    {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children:[

            {
                path: "/Home",
                element: <Home/>
            },
            { 
            path: "/", 
            element: <Shop /> 
            },
        
            { 
                path: "/product/:productId", 
                element: <ProductDetails /> 
            }
    ]
    },


];

export default routes;