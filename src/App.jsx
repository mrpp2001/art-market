import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Page from "./components/Page";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/page" element={<Page />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
