import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter}  from "react-router-dom"
import { AuthProvider } from "./auth/AuthContext.jsx";
import { ParlorProvider } from "./layout/ParlorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
       <AuthProvider>
        <ParlorProvider>
         <App />
        </ParlorProvider>
       </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
