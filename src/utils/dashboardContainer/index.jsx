import React, { useEffect } from "react";

import styles from "./index.module.css";
import Sidebar from "../../components/sidebar";

const DashboardContainer = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardContainer;
