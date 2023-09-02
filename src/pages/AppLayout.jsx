import Sidebar from"./Sidebar"
import styles from './AppLayout.module.css'
import Map from "./Map"
import { Outlet } from "react-router-dom"
export default function AppLayout() {
  return (
    <div className={styles.app}>
        <Sidebar/>
        <Map/>
        <Outlet/>
    </div>
  )
}
