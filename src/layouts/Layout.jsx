import Footer from "./Footer"
import Header from "./Header"

import styles from './Layout.module.css'

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.children}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout