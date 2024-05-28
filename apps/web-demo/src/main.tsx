import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TamaguiProvider } from "tamagui";
import "@tamagui/core/reset.css";
import tamaguiConfig from "../tamagui.config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TamaguiProvider config={tamaguiConfig} defaultTheme="dark">
      <App />
    </TamaguiProvider>
  </React.StrictMode>,
);
