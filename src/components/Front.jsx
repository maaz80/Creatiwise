import React from 'react'
import Image1 from '../images/image1.png'
import Image2 from '../images/image2.png'
import Icon1 from '../images/Icon1.png'
import Icon2 from '../images/Icon2.png'
import Icon3 from '../images/Icon3.png'

function Front() {
    return (
        <div className=' '>
          <div className='flex items-center justify-center flex-col  text-[20px] lg:text-[70px] font-extrabold h-screen text-white'>
          <div className='flex items-center justify-center '>
                <h1>I AM A</h1>
                <img src={Image1} alt="Image1" className='w-12 lg:w-24 h-6 lg:h-12' />
                <h1>FREELANCE</h1>
            </div>
            <div className='flex items-center justify-center '>
                <h1>DESIGNER</h1>
                <img src={Image2} alt="Image1" className='w-12 lg:w-24 h-6 lg:h-12' />
                <h1>FROM</h1>
            </div>
            <div>
                <h1>SAN FRANCISCO</h1>
            </div>
          </div>

            <div className="flex flex-col lg:flex-row items-center justify-between pl-2 lg:pl-40 pr-2 lg:pr-48 bg-black text-white gap-10 lg:gap-0">
                <img src={Icon1} alt="Icon1" className='w-[50%] lg:w-28 h-14 lg:h-9' />
                <img src={Icon2} alt="Icon2" className='w-[50%] lg:w-28 h-14 lg:h-9' />
                <img src={Icon3} alt="Icon3" className='w-[50%] lg:w-28 h-14 lg:h-9' />
                <p className='w-full lg:w-[36%] text-gray-400 text-center lg:text-start'>Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.</p>
            </div>
        </div>
    )
}

export default Front
