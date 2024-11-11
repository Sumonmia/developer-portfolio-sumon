import { Link } from "react-router-dom"


const Projects = () => {
  return (
    <div id="projects" className="bg-base-100 py-10">
      <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-black text-3xl uppercase'>Creative Works</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-7 gap-5'>
          {/* single service start */}
          <div className="flex flex-col w-72 bg-blue-800 rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center ">
                <img src="restaurent.jpg" alt="" className="rounded-lg h-44" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl my-5 ">The Hearty-Spoon</h2>
                <span>
                  The Hearty-Spoon is a Restaurent Website.
                </span>
              </div>
              <div>
                <Link to="/restaurent" target="_blank" className="btn border-0 my-5 hover:bg-blue-500 hover:text-white">View Details</Link>
                {/* <button className="btn mb-5"></button> */}
              </div>
            </div>
          </div>
          {/* single project end */}
          {/* single service start */}
          <div className="flex flex-col w-72 bg-blue-800 rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center ">
                <img src="ls-fullstack.png" alt="LearnSphere" className="rounded-lg h-44" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl my-5 ">LearnSphere</h2>
                <span>
                  LearnSphere is Full-Stack Dynamic Website.
                </span>
              </div>
              <div>
                <Link to="/learnsphere" target="_blank" className="btn border-0 my-5 hover:bg-blue-500 hover:text-white">View Details</Link>
                {/* <button className="btn mb-5"></button> */}
              </div>
            </div>
          </div>
          {/* single project end */}
          {/* single service start */}
          <div className="flex flex-col w-72 bg-blue-800 rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center ">
                <img src="bookshelf.png" alt="" className="rounded-lg h-44" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl my-5 ">The BookShelf</h2>
                <span>
                  The BookShelf is an online book selling shop.
                </span>
              </div>
              <div>
                <Link to="/bookshelf" target="_blank" className="btn border-0 my-5 hover:bg-blue-500 hover:text-white">View Details</Link>
                {/* <button className="btn mb-5"></button> */}
              </div>
            </div>
          </div>
          {/* single project end */}
          {/* single service start */}
          <div className="flex flex-col w-72 bg-blue-800 rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center ">
                <img src="metromovers.png" alt="MV" className="rounded-lg h-44" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl my-5 ">MetroMovers</h2>
                <span>
                  Metromovers is an online car-booking website.
                </span>
              </div>
              <div>
                <Link to="/metromovers" target="_blank" className="btn border-0 my-5 hover:bg-blue-500 hover:text-white">View Details</Link>
                {/* <button className="btn mb-5"></button> */}
              </div>
            </div>
          </div>
          {/* single project end */}
          {/* single service start */}
          <div className="flex flex-col w-72 bg-blue-800 rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center ">
                <img src="news.JPG" alt="news" className="rounded-lg h-44" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl my-5 ">Breaking News</h2>
                <span>
                  The Breaking News is a Newspaper Website.
                </span>
              </div>
              <div>
                <Link to="#" className="btn border-0 my-5 hover:bg-blue-500 hover:text-white">View Details</Link>
                {/* <button className="btn mb-5"></button> */}
              </div>
            </div>
          </div>
          {/* single project end */}
          {/* single service start */}
          <div className="flex flex-col w-72 bg-blue-800 rounded-lg justify-center items-center shadow-lg mt-7">
            <div className="card">
              <div className="flex justify-center items-center ">
                <img src="tea-house.png" alt="Tea-House" className="rounded-lg h-44" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl my-5 ">Tea House</h2>
                <span>
                  The Tea House is a cafe website.
                </span>
              </div>
              <div>
                <Link to="#" className="btn border-0 my-5 hover:bg-blue-500 hover:text-white">View Details</Link>
                {/* <button className="btn mb-5"></button> */}
              </div>
            </div>
          </div>
          {/* single project end */}
        </div>
      </div>
    </div>
  )
}

export default Projects
