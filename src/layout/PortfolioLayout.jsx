
import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"



const PortfolioLayout = () => {
  return (

    <>
      <div className="min-h-screen">
        <Outlet />
      </div>
      

    </>

  )
}

export default PortfolioLayout
