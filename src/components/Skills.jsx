import { FaCss3Alt, FaJs, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { TiHtml5 } from "react-icons/ti"
import CircularSkillBar from "./CircularSkillBar "
import { ImGift } from "react-icons/im"


const Skills = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-white text-3xl'>Some of My Skills</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-x-1 text-white font-bold mt-5">
          <CircularSkillBar skill="HTML5" percentage={95} />
          <CircularSkillBar skill="CSS3" percentage={90} />
          <CircularSkillBar skill="JavaScript" percentage={85} />
          <CircularSkillBar skill="React" percentage={80} />
          <CircularSkillBar skill="Tailwind" percentage={90} />
          <CircularSkillBar skill="Bootstrap" percentage={95} />
          <CircularSkillBar skill="NodeJs" percentage={75} />
          <CircularSkillBar skill="ExpressJs" percentage={80} />
          <CircularSkillBar skill="Firebase" percentage={85} />
          <CircularSkillBar skill="Github" percentage={90} />
        </div>
        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center mt-7 gap-3'>
          {/* single service start */}
          {/* <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <TiHtml5 className="h-24 w-24 text-orange-500" />
            </div>
          </div> */}
          {/* single service end */}
          {/* single service start */}
          {/* <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <FaCss3Alt className="h-24 w-24 text-blue-500" />
            </div>
          </div> */}
          {/* single service end */}

          {/* single service start */}
          {/* <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <FaJs className="h-24 w-24 text-yellow-500" />
            </div>
          </div> */}
          {/* single service end */}
          {/* single service start */}
          {/* <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <FaReact className="h-24 w-24 text-blue-500" />
            </div>
          </div> */}
          {/* single service end */}
          {/* single service start */}
          {/* <div className="flex flex-col w-36 bg-base-100 hover:bg-slate-300 hover:ease-in-out rounded-lg justify-center items-center shadow-lg mt-3">
            <div className="card">
              <RiTailwindCssFill className="h-24 w-24 text-cyan-400" />
            </div>
          </div> */}
          {/* single service end */}
        </div>
      </div>
    </div>
  )
}

export default Skills
