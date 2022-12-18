import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import Search from './components/Search';
import Error from './components/Error';

function App() {


  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="Search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
