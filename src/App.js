import React  from "react";
import ReactDOM  from "react-dom";
import HeaderComponent  from "./components/Header.js";
import BodyComponent from "./components/Body.js";
import FooterComponent from "./components/Footer.js";
import About from "./components/About.js";
import Service from "./components/Services.js";
import Error from "./components/Error.js";
import Topoffers from "./components/Topoffers.js";
import RestoMenu from "./components/RestoMenu.js";
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter } from "react-router-dom";



const AppLayout = () => {
    return (
         <div className="container-fluid">
            <HeaderComponent></HeaderComponent>
            {/* <BodyComponent></BodyComponent> */}
            <Outlet></Outlet>
            <FooterComponent></FooterComponent>
         </div>
    )
};

//  const appRouter = createBrowserRouter([
//     {
//         path : "/",
//         element : <AppLayout></AppLayout>,
//         errorElement: <Error></Error>
//     },
//     {
//         path : "/about",
//         element : <About></About>
//     },
//     {
//         path : "/service",
//         element : <Service></Service>
//     }

//  ]);

 const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout></AppLayout>,
        children : [
            {
                path : "/",
                element : <BodyComponent></BodyComponent>
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/service",
                element : <Service></Service>
            },
            {
                path: "/topoffers",
                element: <Topoffers></Topoffers>
            },
            {
                path: "/restomenu/:restoId",
                element: <RestoMenu></RestoMenu>
            },
        ],
        errorElement: <Error></Error>
    },
    

 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(<AppLayout></AppLayout>); 
root.render( <RouterProvider router={appRouter} />);