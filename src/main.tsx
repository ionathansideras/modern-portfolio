import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <App />
            <Analytics />
        </Router>
    </StrictMode>
);
