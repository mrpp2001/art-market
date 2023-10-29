import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Page from "./components/Page";
import Signup from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./components/firebase";




function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);


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
