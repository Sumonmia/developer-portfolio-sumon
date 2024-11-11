

const BookShelf = () => {
  return (
    <div className="w-4/5 mx-auto pt-24">
      <div className="text-center">
      <h1 className="text-2xl font-bold"> The BookShelf</h1>
      <span>A BookShop Website</span>
      </div>
      <div className="flex flex-col md:flex-row space-x-10 my-5">
        <div className="flex justify-center items-center">
            <img src="bookshop.png" alt="image" className="w-4/5 h-auto" />
        </div>
        <div>
          <span> <strong>Project Overview:</strong><br/> The BookShelf is an interactive, React-based front-end website designed for a modern bookshop. This project highlights my skills in developing visually appealing and highly responsive interfaces that offer an enjoyable browsing experience for book enthusiasts.</span>
          <ul>
            <p className="mt-3"><strong>Features:</strong></p>
            <li className="list-disc"> Responsive Design: Adapted for optimal performance across desktop, tablet, and mobile devices.</li>
            <li className="list-disc"> Interactive UI Elements: User-friendly elements such as book previews, reviews, and wish lists for seamless exploration.</li>
            <li className="list-disc"> Custom Animations: Smooth animations and transitions that enhance user engagement.</li>
          </ul>

          <ul>
            <p className="mt-3"><strong>Technologies Used:</strong></p>
            <li className="list-disc"> Front-End Framework: React.js for dynamic rendering and fast-loading pages
            </li>
            <li className="list-disc">CSS Framework: Tailwind- Styled Components for modular and customizable styles</li>
            <li className="list-disc">Routing: React Router for a seamless multi-page experience</li>
          </ul>
          <p className="my-3"><strong>Visit Live Url: </strong><a href="https://thebookshelf-sumon.netlify.app/" target="_blank" className="hover:text-blue-500">The BookShelf</a></p>
        </div>
      </div>

    </div>
  )
}

export default BookShelf
