

const MetroMovers = () => {
  return (
    <div className="w-4/5 mx-auto pt-24">
      <div className="text-center">
      <h1 className="text-2xl font-bold"> MetroMovers</h1>
      <span>A Car Booking Website around the City</span>
      </div>
      <div className="flex flex-col md:flex-row space-x-10 my-5">
        <div className="flex justify-center items-center">
            <img src="metro.png" alt="image" className="w-4/5 h-auto" />
        </div>
        <div>
          <span> <strong>Project Overview:</strong><br/> MetroMovers is a sleek, front-end car booking website crafted to provide users with a seamless vehicle reservation experience. Developed using a combination of modern web technologies, this project showcases my ability to create visually appealing and interactive user interfaces for service-based platforms.</span>
          <ul>
            <p className="mt-3"><strong>Features:</strong></p>
            <li className="list-disc">Responsive Layout: Fully optimized for desktop, tablet, and mobile users for a consistent experience.</li>
            <li className="list-disc"> Dynamic Content Display: Integration of JavaScript and jQuery for real-time updates and interactive features.</li>
            <li className="list-disc"> Service Overview: Detailed car information sections and service options presented with Bootstrap components.</li>
          </ul>

          <ul>
            <p className="mt-3"><strong>Technologies Used:</strong></p>
            <li className="list-disc"> HTML5: Structuring the content for modern web standards, CSS3: Styling with advanced features for visual appeal.
            </li>
            <li className="list-disc">Bootstrap: Ensuring responsive design and rapid development with pre-designed components</li>
            <li className="list-disc">JavaScript & jQuery: Adding interactivity and dynamic functionality to enhance the user experience</li>
          </ul>
          <p className="my-3"><strong>Visit Live Url: </strong><a href="https://sumonmia.com/metromovers/" target="_blank" className="hover:text-blue-500">MetroMovers</a></p>
        </div>
      </div>

    </div>
  )
}

export default MetroMovers
