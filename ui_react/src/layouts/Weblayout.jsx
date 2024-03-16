import Header from '../pages/auth/Header'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    // const auth = false
    // const uname = "mohan"
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default WebLayout