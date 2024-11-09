import AboutMe from "../components/AboutMe"
import Introduction from "../components/Introduction"
import Projects from "../components/Projects"
import Reviews from "../components/Reviews"
import Services from "../components/Services"
import Footer from "../components/shared/Footer"
import Navbar from "../components/shared/Navbar"
import Skills from "../components/Skills"


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Introduction />
      <Services />
      <Projects />
      <Skills />
      <Reviews />
      <Footer />
    </div>
  )
}

export default HomePage
