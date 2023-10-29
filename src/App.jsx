import Login from "./components/Login";
import Page from "./components/Page";
import Signup from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/page" element={<Page />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
