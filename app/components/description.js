 'use client';
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Description() {
  const title = [
    { desc: 'Frontend WebSite Developer' },
    { desc: 'React Js Developer' },
  ];
  const [titles, setTitles] = useState(title.map((item) => item.desc));
  return (
    <>
       <main className="min-h-screen px-8 py-12 bg-gray-600 flex flex-wrap items-center justify-center md:px-16 lg:px-24">
      {/* Content Section */}
      <div className="w-full lg:w-3/4  md:w-1/2 pr-0 lg:pr-8 flex flex-col items-start">
        <div className="text-left py-2">
          <h2 className="text-yellow-400 text-xl md:text-2xl lg:text-3xl">
            My name is Majid Khan
          </h2>
        </div>
        <div className="text-left py-2">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">
            I am a{' '} <span className="text-yellow-400">
              <Typewriter words={titles} loop={true} cursorStyle="|" typeSpeed={70}
                deleteSpeed={50} delaySpeed={1000}/>
            </span>
          </h1>
        </div>
        <div className="text-left py-2">
          <p className="text-white font-poppins text-sm md:text-base lg:text-xl xl:text-xl 2xl:text-2xl text-justify">
            A skilled and motivated 1 Year of experience in React Js, And +1
            year of experience in HTML, CSS3, BootStrap5, Tailwind CSS, and
            JavaScript. Committed to delivering high-quality results and
            working collaboratively in a friendly and dynamic environment.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/4 md:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
        {/* Rotating Dashed Outline */}
        <motion.div
          className="absolute w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] p-4 rounded-full border-4 border-dashed border-yellow-400" style={{ borderSpacing: '30px' }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: 'linear', }}>
        </motion.div>
        {/* Profile Image */}
        <Image src="/profile.jpg"  width={200} height={200} className="rounded-full w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]" alt="Profile Picture"/>
      </div>
    </main>
    </>
  );
}
export default Description;