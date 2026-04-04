import react from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="bg-white min-h-screen text-gray-700">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout