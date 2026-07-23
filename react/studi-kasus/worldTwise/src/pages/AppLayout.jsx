import Map from "../componensts/Map";
import SideBar from "../componensts/Sidebar";
import User from "../componensts/User";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <User />
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
