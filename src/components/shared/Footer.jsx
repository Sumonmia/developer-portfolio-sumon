import { BsLinkedin } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="bg-blue-900">
      <div className="w-4/5 mx-auto">
        <div className="flex flex-row justify-center items-center gap-6 py-7">
          <a href="https://www.linkedin.com/in/sumonmia77/" target="_blank" className="hover:bg-blue-500 rounded-lg" ><BsLinkedin className="w-10 h-10 text-white hover:scale-90 transition-ease-in-out" /></a>
          <a href="https://github.com/Sumonmia" target="_blank" className="hover:bg-blue-500 rounded-lg"> <FaGithub className="w-10 h-10 text-white hover:scale-90 transition-ease-in-out" /></a>
          <a href="https://www.facebook.com/sumonmia.md77/" target="_blank" className="hover:bg-blue-500 rounded-lg"><FaFacebook className="w-10 h-10 text-white hover:scale-90 transition-ease-in-out" /></a>
          <a href="https://sumonmia.com/" target="_blank" className="hover:bg-blue-500 rounded-lg"><CgWebsite className="w-10 h-10 text-white hover:scale-90 transition-ease-in-out" /></a>
          <a href="https://www.instagram.com/sumon.mia77/" target="_blank" className="hover:bg-blue-500 rounded-lg">  <FaSquareInstagram className="w-10 h-10 text-white hover:scale-90 transition-ease-in-out" /></a>
        </div>
        <div className="text-center text-white py-3">
        <span>All right reserved by <a href="#about" className="hover:text-blue-500">www.sumonmia.com</a></span>
        </div>
      </div>
    </div>
  )
}

export default Footer
