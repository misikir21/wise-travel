
import styles from"./Sidebar.module.css"
import AppNav from "./AppNav"
import Logo from "./Logo"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
        <p>list of cites you visted</p>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy;Copyright{new Date().getFullYear()}By misikir teka
            </p>

        </footer>
        </div>
  )
}
