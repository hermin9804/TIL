import classes from "./MainNavigation.module.css";

function MainNavigaion() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Economicus</div>
      <nav>
        <ul>
          <li>Search icon</li>
          <li>말풍선 icon</li>
          <li>알림종 icon</li>
          <li>프로필 icon</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigaion;
