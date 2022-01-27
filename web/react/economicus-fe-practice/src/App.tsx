import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import MainPage from "./pages/MainPage";
import MyAccountPage from "./pages/MyAccountPage";
import PersonalProfilePage from "./pages/PersonalProfilePage";
import QuantLabPage from "./pages/QuantLabPage";
import QuantModelDetailsPage from "./pages/QuantModelDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/PersonalProfilePage"
            element={<PersonalProfilePage />}
          />
          <Route
            path="/QuantModelDetailsPage"
            element={<QuantModelDetailsPage />}
          />
          <Route path="/QuantLabPage" element={<QuantLabPage />} />
          <Route path="/MyAccountPage" element={<MyAccountPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
