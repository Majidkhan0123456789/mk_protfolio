'use client'


function qualification() {

    const experiences = [
        {
          company: "MetaSharks Solutions",
          location: "Islamabad",
          role: "React Js Developer",
          date: "2024 - Present",
        },
        {
          company: "Esols Technologies",
          location: "Islamabad",
          role: "React js Developer",
          date: "2023 - 2024",
        },
        {
          company: "United Sol",
          location: "Islamabsd",
          role: "Front End Website Developer",
          date: "2022 - 2023",
        },
      ];

  return (
    <main className="min-h-screen px-8 py-12 bg-gray-600   md:px-16 lg:px-24">
        <div className="py-3">
            <h1 className="text-white xl:text-xl lg:text-xl font-poppins font-semibold text-center">My Journey <br/><span className="text-yellow-400 text-center  xl:text-4xl font-poppins lg:tex-4xl">Qualification</span> </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:py-12 py-8">
            <div className="">
             
             
        <div className="py-8"> 
        <h2 className="text-2xl justify-center text-white font-bold flex items-center">
            Experience
          </h2>
          <div className="py-8"> 
          <ul className=" grid lg:grid-cols-2  gap-8 ">
            {experiences.map((exp, index) => (
              <li key={index} className="relative pl-8 py-4">
                {/* Custom Bullet */}
                <span className="absolute left-0 top-1.5 w-4 h-4 bg-yellow-400 rounded-full"></span>
                <span className="absolute left-2 top-6 w-[2px] h-16 bg-yellow-400"></span>
                {/* Content */}
                <h3 className="font-bold text-white text-xl">{exp.company}</h3>
                <p className="text-white text-lg">{exp.role}</p>
                <span className="text-yellow-400 text-base ">{exp.date}</span>
              </li>
            ))}
          </ul>  
          </div>
          </div> 
        </div>
        </div>
     </main>
  )
}

export default qualification