import { useContext } from "react";

import FavoritesContext, {
  FavoritesContextProvider,
} from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

function FavoritsPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritsPage;
