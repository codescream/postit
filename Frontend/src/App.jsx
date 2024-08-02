import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx"
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import MyParcels from "./pages/MyParcels.jsx";
import ParcelDetails from "./pages/ParcelDetails.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: '/myparcels',
      element: <MyParcels />
    },
    {
      path: '/myparcels/:parcelId',
      element: <ParcelDetails />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
