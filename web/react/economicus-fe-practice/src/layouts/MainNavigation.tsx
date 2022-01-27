import { AppBar, Toolbar } from "@material-ui/core";
import { ChatBubble, Home, Notifications, People } from "@material-ui/icons";
import { Link } from "react-router-dom";

import PositionedMenu from "../components/PositionedMenu";
import SearchTextField from "../components/SearchTextField";

const MainNavigation = () => {
  return (
    <AppBar style={{ background: "#FFFFFF", alignItems: "center" }}>
      <Toolbar>
        <Link to="/">
          <img
            width={50}
            height={50}
            src="https://avatars.githubusercontent.com/u/98199739?s=200&v=4"
          />
        </Link>
        <SearchTextField />
        <Link to="/">
          <Home style={{ paddingLeft: 10 }} />
        </Link>
        <Link to="/">
          <People style={{ paddingLeft: 10 }} />
        </Link>
        <Link to="/">
          <ChatBubble style={{ paddingLeft: 10 }} />
        </Link>
        <Link to="/">
          <Notifications style={{ paddingLeft: 10 }} />
        </Link>
        <PositionedMenu />
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
