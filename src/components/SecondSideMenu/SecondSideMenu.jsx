import React from 'react';
import { TbDeviceAnalytics } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import styles from './SecondSideMenu.module.css'; 

function SecondSideMenu() {
  const SidebarItems = [
    {
      id: 1,
      name: "Demo",
      icon: <TbDeviceAnalytics className={styles.sideIcon} />,
    },
    {
      id: 2,
      name: "Configuration",
      icon: <FiSettings className={styles.sideIcon} />,
    },
    {
      id: 3,
      name: "Search",
      icon: <CiSearch className={styles.sideIcon} />,
    },
  ];

  return (

    <div className={styles.sidebar}>
      <div className={ styles.heading }>
        <span className={styles.spanHeading}>Consent Manager</span>
      </div>
      <div className={styles.sidebarItems}>
      {SidebarItems.map(item => (
        <div key={item.id} className={styles.sidebarItem}>
          {item.icon}
          <span className={styles.text}>{item.name}</span>
        </div>
      ))}
      </div>
    </div>
  );
}

export default SecondSideMenu;