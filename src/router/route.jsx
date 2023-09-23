import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Error from "../components/Error/Error";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";
import Favourites from "../pages/Favourites/Favourites";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: ()=> fetch("/phones.json")
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/phones/:id',
                element: <PhoneDetails></PhoneDetails>,
                loader: () => fetch("/phones.json")
            },
            {
                path:'/favourites',
                element: <Favourites></Favourites>
            }
        ]
    }
]);


export default myCreatedRoute;