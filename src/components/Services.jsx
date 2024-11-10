import { CgWebsite } from "react-icons/cg"
import { FaLaptopCode, FaNewspaper, FaShopify, FaShoppingCart } from "react-icons/fa"
import { ImProfile } from "react-icons/im"


const Services = () => {
  return (
    <div id="services" className="bg-blue-800 py-10">
      <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-white text-3xl uppercase'>My Amazing Services</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-7 gap-5'>
          {/* single service start */}
          <div className="flex flex-col w-72 bg-base-100 hover:bg-slate-300 hover:scale-105 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center mt-5">
                <FaLaptopCode className=" w-14 h-10 text-blue-500" />
              </div>
              <div className="card-body">
                <h2 className="card-title">Web Design</h2>
              </div>
            </div>
          </div>
          {/* single service end */}
          <div className="flex flex-col w-72 bg-base-100 hover:bg-slate-300 hover:scale-105 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center mt-5">
                <CgWebsite className=" w-14 h-10 text-blue-500" />
              </div>
              <div className="card-body">
                <h2 className="card-title">Full-Stack Development</h2>
              </div>
            </div>
          </div>
          {/* single service end */}
          <div className="flex flex-col w-72 bg-base-100 hover:bg-slate-300 hover:scale-105 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center mt-5">
                <FaShopify className=" w-14 h-10 text-blue-500" />
              </div>
              <div className="card-body">
                <h2 className="card-title">E-Commerce Website</h2>
              </div>
            </div>
          </div>
          {/* single service end */}
          <div className="flex flex-col w-72 bg-base-100 hover:bg-slate-300 hover:scale-105 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center mt-5">
                <FaShoppingCart className=" w-14 h-10 text-blue-500 " />
              </div>
              <div className="card-body">
                <h2 className="card-title">Landing Page Design</h2>
              </div>
            </div>
          </div>
          {/* single service end */}
          <div className="flex flex-col w-72 bg-base-100 hover:bg-slate-300 hover:scale-105 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center mt-5">
                <ImProfile className=" w-14 h-10 text-blue-500 " />
              </div>
              <div className="card-body">
                <h2 className="card-title">Portfolio Website</h2>
              </div>
            </div>
          </div>
          {/* single service end */}
          {/* single service end */}
          <div className="flex flex-col w-72 bg-base-100 hover:bg-slate-300 hover:scale-105 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center mt-5">
                <FaNewspaper className=" w-14 h-10 text-blue-500 " />
              </div>
              <div className="card-body">
                <h2 className="card-title">NewsPaper Website</h2>
              </div>
            </div>
          </div>
          {/* single service end */}

        </div>
      </div>
    </div>
  )
}

export default Services
