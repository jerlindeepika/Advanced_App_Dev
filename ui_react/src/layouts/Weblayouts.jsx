import { Outlet } from 'react-router-dom'
import Navbar from '../public/Navbar'
import Footer from '../public/Footer'
const WebLayout = () => {
    // const auth = false
    // const uname = "mohan"
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default WebLayout