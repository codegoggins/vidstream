import Home from "./pages/Home";
import Video from "./pages/Video";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
   return (
     <>
       <Navbar/>
       <Outlet/>
       <Footer/>
     </>
   )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/:id",
        element:<Video/>,
      },
    ]
  }
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
