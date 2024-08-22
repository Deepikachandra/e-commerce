import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './AppLayout';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NoMatch from './Components/Pages/NoMatch';
import Products from './Components/Pages/Products';
import About from './Components/Pages/About';
import Error from './Components/Pages/Error';
import Cart from './Components/Pages/Cart';
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },
  {
    path:"/home",
    element:<AppLayout/>
  },
  {
    path:"/products",
    element:<Products/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/product/:categoryNo",
    element:<Products/>
  },
  {
    path:"*",
    element:<NoMatch />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
