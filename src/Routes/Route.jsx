import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SingleBook from "../pages/SingleBook/SingleBook";
import PrivateRoute from "./PrivateRoute";
import QuantityProvider from "../providers/QuantityProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/book/:id',
                element: <PrivateRoute>
                    <QuantityProvider>
                        <SingleBook></SingleBook>
                    </QuantityProvider>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
            }
        ]
    },
]);

export default router;