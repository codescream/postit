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

function App() {
  const Layout = () => {
    return (
      <div className="text-black bg-white h-screen flex justify-between flex-col">
        <Header />
          <div className="flex flex-1 w-full h-full">
            <Navbar />
            <Outlet />
          </div>
        <Footer img={'brand.png'} />
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
          path: "parcels",
          element: <Parcels />,
        },
        {
          path: "parcel/:parcelId",
          element: <ParcelDetail />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "user/:userId",
          element: <UserDetails />,
        },
        {
          path: "new-parcel",
          element: <NewParcel />,
        },
        {
          path: "new-user",
          element: <NewUser />,
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
