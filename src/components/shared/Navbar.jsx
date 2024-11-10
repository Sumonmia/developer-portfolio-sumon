import { FaServicestack, FaTools } from "react-icons/fa"
import { GiSkills } from "react-icons/gi"
import { GrProjects } from "react-icons/gr"
import { IoPersonCircleSharp } from "react-icons/io5"
import { MdOutlineContactMail } from "react-icons/md"
import { TiHomeOutline } from "react-icons/ti"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed bg-blue-900 text-white shadow-lg z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-blue-900 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                            <li className="hover:bg-blue-600 rounded-md"><a>Home</a></li>
                            <li className="hover:bg-blue-600 rounded-md"><a>About Me</a></li>
                            <li className="hover:bg-blue-600 rounded-md"><a>Services</a></li>
                            <li className="hover:bg-blue-600 rounded-md"><a>Projects</a></li>
                            <li className="hover:bg-blue-600 rounded-md"><a>Skills</a></li>
                            <li className="hover:bg-blue-600 rounded-md"><a>Tools</a></li>
                            <li className="hover:bg-blue-600 rounded-md"><a>Contact Me</a></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="hover:bg-blue-600 rounded-md"><a className="tooltip tooltip-bottom" data-tip="Home"><TiHomeOutline className="w-10 h-7 hover:scale-90" /></a></li>

                        <li className="hover:bg-blue-600 rounded-md"><a href="#intro" className="tooltip tooltip-bottom" data-tip="About Me"><IoPersonCircleSharp className="w-10 h-7 hover:scale-90" /></a></li>
                        <li className="hover:bg-blue-600 rounded-md"><a href="#services" className="tooltip tooltip-bottom" data-tip="Services"><GrProjects className="w-10 h-7 hover:scale-90" /></a></li>
                        <li className="hover:bg-blue-600 rounded-md"><a href="#projects" className="tooltip tooltip-bottom" data-tip="Projects"><FaServicestack  className="w-10 h-7 hover:scale-90" /></a></li>
                        <li className="hover:bg-blue-600 rounded-md"><a href="#skills" className="tooltip tooltip-bottom" data-tip="Skills"><GiSkills className="w-10 h-7 hover:scale-90" /></a></li>
                        {/* <li className="hover:bg-blue-600 rounded-md"><a className="tooltip tooltip-bottom" data-tip="Tools"><FaTools className="w-10 h-7 hover:scale-90" /></a></li> */}
                        <li className="hover:bg-blue-600 rounded-md"><a href="#contact" className="tooltip tooltip-bottom" data-tip="Contact Me"><MdOutlineContactMail className="w-10 h-7 hover:scale-90" /></a></li>
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    )
}

export default Navbar
