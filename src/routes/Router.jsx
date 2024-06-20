import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Rent from "../pages/Rent";
import About from "../pages/About";
import Error from "../pages/Error";

const Router = () => {
    return(
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rent/:id' element={<Rent />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Router;
