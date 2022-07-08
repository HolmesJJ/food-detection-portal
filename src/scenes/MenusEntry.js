import React from "react";
import { useLocation } from 'react-router-dom';

import { useMenusEntry as useStyles } from "../styles/Menus";

function MenusEntry() {
  const styles = useStyles();
  const location = useLocation();
  const names = location.state;
  return (
    <div className={styles.container}>
      {names.join(", ")}
    </div>
  );
}

export default MenusEntry;
