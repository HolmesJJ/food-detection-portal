import React from "react";
import { useLocation } from 'react-router-dom';
import { Option } from 'nasi-lemak';

import { useMenusEntry as useStyles } from "../styles/Menus";

function MenusEntry() {
  const styles = useStyles();
  const location = useLocation();
  const names = Option.value(Option.truthy(location.state), []);
  return (
    <div className={styles.container}>
      {names.join(", ")}
    </div>
  );
}

export default MenusEntry;
