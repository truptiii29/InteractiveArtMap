import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import InteractiveMap from "./pages/InteractiveMap";

function App() {
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/interactive-map"
          element={<InteractiveMap />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;