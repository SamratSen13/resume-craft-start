import React from "react";
import styles from "./InputController.module.css";

function InputController({Label, ...props}) {
  return (
    <div className={styles.container}>
      {Label && <label>{Label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputController;
