import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Quote from "./pages/quote/Quote";
import Restaurant from "./pages/restaurant/Restaurant";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quote />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
