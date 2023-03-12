import { useState } from "react";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";

import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <TopBar />
      <Register />
    </>
  );
}

export default App;
