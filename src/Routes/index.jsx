import { createBrowserRouter} from "react-router-dom";
import MainLayOut from "../components/Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Profile from "../components/Layout/ProfileInformation/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
         {
            path:'/',
            element:<Home></Home>,
         },
         {
            path: 'profile',
            element: <Profile></Profile>
         },
         {
            path: 'about',
            element:<PrivateRoute><About></About></PrivateRoute>
         }
      ],
   },
      {
         path:'/login',
         element:<Login></Login>
      },
      {
         path: '/register',
         element: <Register></Register>
      },
      {
         path: '/profile',
         element: <Profile></Profile>
      }
   
]);

export default router;