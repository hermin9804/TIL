import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritsPage from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<AllMeetupPage />} />
      <Route exact path="/new-meetup" element={<NewMeetupPage />} />
      <Route exact path="/favorites" element={<FavoritsPage />} />
    </Routes>
  );
}

export default App;
