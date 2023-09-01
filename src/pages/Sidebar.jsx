
import styles from"./Sidebar.module.css"
import AppNav from "./AppNav"
import Logo from "./Logo"

import AppLayout from './AppLayout'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppLayout/>
        <p>list of cites you visted</p>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy;Copyright{new Date().getFullYear()}By misikir teka
            </p>

        </footer>
        </div>
  )
}
