import React from "react";

import { useCameraEntry as useStyles } from "../styles/Camera";

function CameraEntry() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Hello Camera!
    </div>
  );
}

export default CameraEntry;
