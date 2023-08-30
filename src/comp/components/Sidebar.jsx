import React from 'react'
import styles from"./Sidebar.module.css"
import Logo from "./Logo"

import AppLayout from '../../pages/AppLayout'

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
        <Logo/>
        <AppLayout/>
        <p>list of cites you visted</p>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy;Copyright
            </p>

        </footer>
        </div>
  )
}
