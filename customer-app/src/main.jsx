import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import App from "@/App";
import { AuthProvider } from "@/context/AuthContext";
import { UploadProvider } from "@/context/UploadContext";
import { RequestsProvider } from "@/context/RequestsContext";
import "@/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <RequestsProvider>
            <UploadProvider>
              <App />
            </UploadProvider>
          </RequestsProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);