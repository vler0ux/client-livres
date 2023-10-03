import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { Home } from "./routes/Home";
import { Books } from "./routes/Books";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/books',
    element: <Books />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
