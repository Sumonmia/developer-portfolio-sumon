

const Introduction = () => {
  return (
    <div className="bg-base-100 py-10">
    <div className='w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-center'>
      <div className='w-2/3'>
        <h1 className='text-black text-3xl'>About Me</h1>
        <div className='flex space-x-7 mt-5'>
            <p>
            My name is Sumon Mia. I am a Freelance Full-Stack Web Developer, and I'm very passionate and dedicated to my work. Having 3+ years experience as a professional Web developer and 8+ years experience in diverse filed of Computer Science & Engineering, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.
            </p>
        </div>
      </div>
      <div className='w-1/3'>
        <img src="intro-sumon.png" alt="sumon" className='w-64'/>
      </div>
    </div>
  </div>
  )
}

export default Introduction
