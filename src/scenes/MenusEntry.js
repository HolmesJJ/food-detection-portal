import React from "react";

import { useMenusEntry as useStyles } from "../styles/Menus";

function MenusEntry() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Hello Menus!
    </div>
  );
}

export default MenusEntry;
