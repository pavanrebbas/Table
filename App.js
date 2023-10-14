
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Menu from "./src/components/Menu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const AppLayout = function () {

    return (

        <>
            <div>
                <Header />
                <Outlet />
                {/* <Footer /> */}

            </div>
        </>
    )
};


const AppRouter = createBrowserRouter([


    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            }
        ]
    }



]);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={AppRouter}></RouterProvider>)