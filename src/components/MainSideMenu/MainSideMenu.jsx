import React from "react";
import { CiHome } from "react-icons/ci";
import { PiFolderUserDuotone } from "react-icons/pi";
import { MdOutlineAnalytics } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";
import styles from "./MainSideMenu.module.css";

function MainSideMenu() {
  const SidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <CiHome className={styles.sideIcon} />,
    },
    {
      id: 2,
      name: "Applications",
      icon: <PiFolderUserDuotone className={styles.sideIcon} />,
    },
    {
      id: 3,
      name: "Analytics",
      icon: <MdOutlineAnalytics className={styles.sideIcon} />,
    },
    {
      id: 4,
      name: "Workflows",
      icon: <LuWorkflow className={styles.sideIcon} />,
    },
    {
      id: 5,
      name: "Dev Hub",
      icon: <AiOutlineCode className={styles.sideIcon} />,
    },
    {
      id: 6,
      name: "Account",
      icon: <MdOutlineAccountCircle className={styles.sideIcon} />,
    },
    {
      id: 7,
      name: "Consent Manager",
      icon: <LuKeyRound className={styles.sideIcon} />,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <img src="/hypervergeLogoshort.png" alt="logo" className={styles.image} />
      </div>

      <div className={styles.sideMenu}>
        {SidebarItems.map((item) => (
          <div key={item.id} className={styles.sideItem}>
            {item.icon}
            <p className={styles.text}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSideMenu;
