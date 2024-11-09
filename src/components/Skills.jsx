import { FaCss3Alt, FaJs, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { TiHtml5 } from "react-icons/ti"


const Skills = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-white text-3xl'>Some of My Skills</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center mt-7 gap-3'>
          {/* single service start */}
          <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <TiHtml5 className="h-24 w-24 text-orange-500" />
            </div>
          </div>
          {/* single service end */}
          {/* single service start */}
          <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <FaCss3Alt className="h-24 w-24 text-blue-500" />
            </div>
          </div>
          {/* single service end */}

          {/* single service start */}
          <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <FaJs className="h-24 w-24 text-yellow-500" />
            </div>
          </div>
          {/* single service end */}
          {/* single service start */}
          <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <FaReact className="h-24 w-24 text-blue-500" />
            </div>
          </div>
          {/* single service end */}
          {/* single service start */}
          <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <RiTailwindCssFill className="h-24 w-24 text-cyan-400" />
            </div>
          </div>
          {/* single service end */}

        </div>
      </div>
    </div>
  )
}

export default Skills
