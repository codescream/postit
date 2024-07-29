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
      <div className="text-black h-screen bg-yellow-200 flex justify-between flex-col">
        <Header />
          <div className="flex w-screen h-full">
            <Navbar />
            <Outlet />
          </div>
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
          path: "newUser",
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
