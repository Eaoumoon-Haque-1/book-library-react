import React from 'react';
import bookImgLink from '../../assets/books.jpg'

const Banner = () => {
    return (
  <div className='flex flex-col-reverse gap-5 md:flex-row justify-around items-center rounded-2xl bg-gradient-to-r from-gray-900 via-[#0f172a] to-black px-16 py-20 mt-[47px] mb-24 border border-cyan-500/10 shadow-xl'>

    {/* Left Content */}
    <div>
      <h3 className='text-white font-extrabold text-[52px] mb-8 leading-tight'>
        Books to freshen up <br />
        <span className='text-cyan-400'>your bookshelf</span>
      </h3>

      <button className='px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30'>
        View The List
      </button>
    </div>

    {/* Right Image */}
    <div className='relative'>
      <div className='absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full'></div>
      <img
        className='relative max-h-[394px] max-w-[318px] rounded-lg'
        src={bookImgLink}
        alt=""
      />
    </div>

  </div>
);
};

export default Banner;