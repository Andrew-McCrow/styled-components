// Demo of using CSS Modules to style a simple Header component.

import React from "react";
import styles from "./header.module.css";

function Header() {
  return <h1 className={styles.title}>Welcome to My App</h1>;
}

export default Header;
