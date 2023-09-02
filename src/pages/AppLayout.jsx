import Sidebar from"./Sidebar"
import styles from './AppLayout.module.css'
import Map from "./Map"
export default function AppLayout() {
  return (
    <div className={styles.app}>
        <Sidebar/>
        <Map/>
    </div>
  )
}
