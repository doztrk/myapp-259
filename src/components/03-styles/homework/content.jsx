import React from "react";
import { styles } from "./styles"; 

export const Content = () => {
    return (
      <div style={styles.content}>
        <div style={styles.box}>Content Block 1</div>
        <div style={styles.box}>Content Block 2</div>
        <div style={styles.box}>Content Block 3</div>
        <div style={styles.box}>Content Block 4</div>
        <div style={styles.box}>Content Block 5</div>
        <div style={styles.box}>Content Block 6</div>
      </div>
    );
};

