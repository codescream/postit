import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  Home,
  ErrorPage,
  Parcels,
  ParcelDetail,
  Users,
  UserDetails,
  Login,
  NewParcel,
  NewUser,
} from "./pages";
import { Footer, Header, Navbar } from "./components";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const Layout = () => {
    return (
      <div className="text-black h-screen bg-yellow-200 flex justify-between flex-col">
        <Header />
        {
          loggedIn ? (
            <div className="flex w-screen h-full">
              <Navbar />
              <Outlet />
            </div>
          ) : (
            <Login />
          )
        }
        
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/parcels",
          element: <Parcels />,
        },
        {
          path: "/parcel/:parcelId",
          element: <ParcelDetail />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/user/:userId",
          element: <UserDetails />,
        },
        {
          path: "/new-parcel",
          element: <NewParcel />,
        },
        {
          path: "/NewUser",
          element: <NewUser />,
        },
      ],
      errorElement: <ErrorPage />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
