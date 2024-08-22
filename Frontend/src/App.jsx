import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import MyParcels from "./pages/MyParcels.jsx";
import ParcelDetails from "./pages/ParcelDetails.jsx";
import Header from "./components/Header.jsx";

const Layout = () => {
  return (
    <div className="p-4">
      <Header />
      <Outlet />
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("userData"))
    ? true
    : false;
  return isAuthenticated ? children : <Navigate to={"/landingPage"} />;
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: JSON.parse(localStorage.getItem("userData")) ? <Navigate to={"/myparcels"} /> : <Navigate to={'/landingPage'} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/myparcels",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/myparcels",
          element: <MyParcels />,
        },
        {
          path: "/myparcels/:parcelId",
          element: <ParcelDetails />,
        },
      ],
    },
    {
      path: '/landingPage',
      element: <LandingPage />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
