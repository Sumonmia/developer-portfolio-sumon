

const LearnSphere = () => {
  return (
    <div className="w-4/5 mx-auto pt-24">
      <div className="text-center">
      <h1 className="text-2xl font-bold"> The LearnSphere</h1>
      <span>A Course Selling Website</span>
      </div>
      <div className="flex flex-col md:flex-row space-x-10 my-5">
        <div className="flex justify-center items-center">
            <img src="coursewebsite.png" alt="image" className="w-4/5 h-auto" />
        </div>
        <div>
          <span> <strong>Project Overview:</strong><br/> The LearnSphere is a full-stack, dynamic website designed for online course selling, bridging the gap between learners and educators. This project demonstrates my expertise in developing complex, interactive web applications that facilitate seamless user experiences for both course buyers and administrators. </span>
          <ul>
            <p className="mt-3"><strong>Features:</strong></p>
            <li className="list-disc"> User Dashboard: Personalized dashboards for learners to track their courses, progress, and certifications.</li>
            <li className="list-disc"> Admin Panel: Custom-built admin panel for managing courses, users, and content updates.</li>
            <li className="list-disc"> Secure Payment Gateway: Integrated payment system for smooth, secure transactions.</li>
          </ul>

          <ul>
            <p className="mt-3"><strong>Technologies Used:</strong></p>
            <li className="list-disc"> Front-End: React.js for a dynamic user interface
            </li>
            <li className="list-disc">Back-End: Node.js and Express.js for robust server-side operations</li>
            <li className="list-disc">Database: MongoDB for managing user data and course content</li>
            <li className="list-disc">Authentication: Firebase secure login and user authentication</li>
          </ul>
          <p className="my-3"><strong>Visit Live Url: </strong><a href="https://the-learnsphere-sumon.netlify.app/" target="_blank" className="hover:text-blue-500">The LearnSphere</a></p>
        </div>
      </div>

    </div>
  )
}

export default LearnSphere
