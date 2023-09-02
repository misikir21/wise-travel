import Sidebar from"./Sidebar"
import styles from './AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={styles.app}>
        <Sidebar/>
    </div>
  )
}
