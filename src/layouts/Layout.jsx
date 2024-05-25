import Footer from "./Footer"
import Header from "./Header"


function Layout({ childern }) {
    return (
        <>
            <Header />
            <div>
                {childern}
            </div>
            <Footer />
        </>
    )
}

export default Layout