import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SingleBook from "../pages/SingleBook/SingleBook";
import PrivateRoute from "./PrivateRoute";
import QuantityProvider from "../providers/QuantityProvider";
import ManageBooks from "../pages/ManageBooks/ManageBooks";
import AddItems from "../pages/AddItems/AddItems";
import MyItem from "../pages/MyItem/MyItem";
import Blogs from "../pages/Blogs/Blogs";

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
                // loader: ({ params }) => fetch(`https://warehouse-server-zeta.vercel.app/books/${params.id}`)
            },
            {
                path: "/manage-books",
                element: <ManageBooks></ManageBooks>,
                // loader: () => fetch('https://warehouse-server-zeta.vercel.app/books/all')
                loader: () => fetch('https://warehouse-server-zeta.vercel.app/booksCount')
            },
            {
                path: "/addItems",
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
            },
            {
                path: "/myItem",
                element: <PrivateRoute><MyItem></MyItem></PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            }
        ]
    },
]);

export default router;