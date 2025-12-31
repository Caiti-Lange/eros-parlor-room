import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter}  from "react-router"
import { AuthProvider } from "./auth/AuthContext.jsx";
import { PageProvider } from "./layout/PageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
       <AuthProvider>
        <PageProvider>
         <App />
        </PageProvider>
       </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
