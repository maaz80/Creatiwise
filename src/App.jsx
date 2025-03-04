import React from 'react'
import Navbar from './components/Navbar'
import Front from './components/Front'
import Expertise from './components/Expertise'
import WorkCard from './components/WorkCard'
import CardImage1 from './images/CardImage1.png'
import CardImage2 from './images/CardImage2.png'
import CardImage3 from './images/CardImage3.png'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Testimonial from './components/Testimonials'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {
  return (
    <div className='syne bg-black '>
      <Navbar />
      <div id="Home">
        <Front />
      </div>
      <div id="About">
      <Expertise />
      </div>
      <div id='Projects' className='w-[82%] mx-auto mt-44'>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold  flex items-center text-white">
            <span className="mr-2 text-2xl">✶</span> Works
          </h2>
          <div className='underline text-white hover:text-gray-400 hover:no-underline'>View all</div>
        </div>
        <div className='space-y-6'>
          <WorkCard heading={'Analysis Application'} Tech1={'FIGMA'} Tech2={'UX'} CardImage={CardImage1} />
          <WorkCard heading={'Fortknox Application'} Tech1={'MOBILE'} Tech2={'WEB'} CardImage={CardImage2} />
          <WorkCard heading={'Zenocide Application'} Tech1={'APP'} Tech2={'WEB'} CardImage={CardImage3} />
        </div>
      </div>
      <Experience />
      <Blog />
      <Testimonial />
      <Questions />
      <div id="Contact">
      <Footer />
      </div>
    </div>
  )
}

export default App
