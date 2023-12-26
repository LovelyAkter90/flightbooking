import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import RootLayOut from "./RootLayout/RootLayOut";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}
export default App;
