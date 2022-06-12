import "./App.scss";
import { Clock, Stopwatch, Timer } from "./components";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <div className="panel">
        <div className="navbar">
          <Link to="/">clock</Link>
          <Link to="/stopwatch">stopwatch</Link>
          <Link to="/timer">timer</Link>
          <Link to="/">
            <IoSettingsOutline />
          </Link>
        </div>
        <Routes>
          <Route index element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
