import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

import Detail from "./components/Detail"
import Home from "./components/Home";
import Update from "./components/Update";
import Add from "./components/Add";

function App() {
  return (
    <Detail>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Contact />} />
            <Route path="/student/add/:id" element={<Add />} />
            <Route path="/student/edit/:id" element={<Update />} />
            
          </Routes>
        </Router>
      </div>
    </Detail>
  );
}

export default App;