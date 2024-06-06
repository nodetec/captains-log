import "./styles/globals.css";

import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import { Toaster } from "./components/ui/sonner";
import { useContextMenuEvent } from "./hooks/useContextMenuEvent";
import useThemeChange from "./hooks/useThemeChange";
import HomePage from "./pages/HomePage";
import { useAppContext } from "./store";

function App() {
  const handleThemeChange = (theme: string) => {
    console.log("THEME", theme);
  };

  useThemeChange(handleThemeChange);
  useContextMenuEvent();

  const { setSettings } = useAppContext();

  useEffect(() => {
    localStorage.setItem("vite-ui-theme", "system");
    setSettings({ vim: "true" });
  }, []);

  return (
    <>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/u/:npub" element={<UserPage />} /> */}
        {/* </Route> */}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
