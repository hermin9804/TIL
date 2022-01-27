import { ClassNames } from "@emotion/react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout: React.FC = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
