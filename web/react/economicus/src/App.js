import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        {/* <Route exact path="/lab" element={<LabPage />} />
        <Route exact path="/my-profile" element={<ProfilePage />} />
        <Route exact path="/setttings" element={<SettingsPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
