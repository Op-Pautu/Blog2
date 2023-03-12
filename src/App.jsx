import { useState } from "react";
import TopBar from "./components/topbar/TopBar";
import Write from "./components/write/Write";
import Home from "./pages/home/Home";

import Settings from "./pages/settings/Settings";

function App() {
  return (
    <>
      <TopBar />
      <Settings />
    </>
  );
}

export default App;
