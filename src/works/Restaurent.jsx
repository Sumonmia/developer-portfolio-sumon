

const Restaurent = () => {
  return (
    <div className="w-4/5 mx-auto pt-24">
      <div className="text-center">
      <h1 className="text-2xl font-bold">The Hearty Spoon</h1>
      <span>A Restaurant Website</span>
      </div>
      <div className="flex flex-col md:flex-row space-x-10 my-5">
        <div className="flex justify-center items-center">
            <img src="heartyspoon.png" alt="image" className="w-4/5 h-auto" />
        </div>
        <div>
          <span> <strong>About the Website:</strong><br/> The HeartySpoon is a modern, user-friendly restaurant website designed to reflect the warmth and comfort of home-cooked meals. With a vibrant aesthetic and intuitive layout, this project highlights my ability to merge functionality with engaging design. </span>
          <ul>
            <p className="mt-3"><strong>Features:</strong></p>
            <li className="list-disc"> Dynamic Carousel Banner: Showcases signature dishes, promotions, and the restaurant’s story.</li>
            <li className="list-disc"> Interactive Menu: A digital, easy-to-navigate menu displaying mouth-watering meal options.</li>
            <li className="list-disc"> Responsive Design: Fully optimized for desktops, tablets, and mobile devices.</li>
          </ul>

          <ul>
            <p className="mt-3"><strong>Technologies Used:</strong></p>
            <li className="list-disc"> Front-End: HTML, CSS, JavaScript
            </li>
            <li className="list-disc"> APIs: Integrated data fetching from REST API</li>
          </ul>
          <p className="my-3"><strong>Visit Live Url: </strong><a href="https://sumonmia.github.io/the-heartyspoon/" target="_blank" className="hover:text-blue-500">The HeartySpoon</a></p>
        </div>
      </div>

    </div>
  )
}

export default Restaurent
