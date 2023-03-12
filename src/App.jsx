import { useState } from "react";
import TopBar from "./components/topbar/TopBar";
import Write from "./components/write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";

function App() {
  return (
    <>
      <TopBar />
      <Write />
    </>
  );
}

export default App;
