import React from 'react'
import { DiaaAbdulmahdy2 } from '../assets/Images'



const About = () => {
  return (
    <div className='container mx-auto pt-[60px]'>
      {/* Start About me */}

      <div className='mt-[100px] bg-white shadow-lg grid grid-cols-1 sm:shadow-lg mdl:shadow-lg   sm:grid-cols-1  mdl:grid-cols-2 lg:grid-cols-2 container mx-auto px-[26px] '>

        <div className='  py-11 mdl:px-5 grid grid-cols-1    sm:grid-cols-1 mdl:grid-cols-1 lg:grid-cols-1  '>
          <div className=' '>
            <img className='  rounded-xl' src={DiaaAbdulmahdy2} alt="" />

            <div className='py-5 '>
              <h1 className='font-bold font-serif text-xl text-gray-600  '>Name: <span className='font-medium'>Diaa Abdulmahdy</span></h1>
              <p className='font-bold font-serif text-xl text-gray-600'>Job: <span className='font-medium'>Front-End developer</span></p>
              <p className='font-bold font-serif text-lg text-gray-600'>Email:  <span className='font-medium'>diaaabdulmahdy@gmail.com </span></p>
              <p className='font-bold  text-lg text-gray-600'>Phone: <a className='text-blue-700' href="https://wa.link/epnvj4" target='_blank' >+201055030994</a>  </p>
            </div>



            <p className='text-2xl font-bold  font-serif text-gray-600'>Skills</p>
            <p className=' font-serif text-xl text-gray-600 py-2'>HTML, CSS, Bootstrap, JavaScript, DOM, ES6, API, TailwindCSS, React.js, React Router, Redux Toolkit, Axios , ContextAPI, Firebase, Formk </p>
            <p className='font-bold font-serif text-xl text-gray-600'> <span className='font-medium text-gray-600'></span></p>



          </div>

        </div>


        <div className='py-10  ml-[10px] px-1 '>
          <p className='font-bold text-sky-950 text-4xl  '>
            About me
          </p>

          <div className="bg-pink-700 w-[100px] h-[3px] "></div>
          <p className='text-gray-600 font-medium lgl:w-[566px] mt-5 text-2xl  '>
            Hello, my name is Diaa Abdulmahdy. I'm 20 years old and live in Giza, Egypt. I'm a second-year student at the Faculty of Computer Science
             and Information Technology at Cairo University, majoring in cybersecurity. I have two years of experience in web and front-end development
              using React JS and Tailwind CSS. I build e-commerce websites for platforms like Udemy, Coursera, and Khamsat, and I work with APIs, 
              the axsio Redux toolkit, and React Router.
          </p>
        </div>



      </div>
      {/* End About me */}


      {/* Resume */}
      {/* Start Resume */}
      <div className='' >
        {/* div one  */}
        <div className='m-[100px] text-center items-center grid grid-cols-1 sm:grid-cols-1'>
          <h1 className='text-4xl font-bold font-serif '>
            Resume
          </h1>
          <div className="bg-pink-700 flex m-auto mb-5 w-[50px] h-[3px] mt-3"></div>

          <p className='text-neutral-600'>
            قال رب اشرح لي صدري ويسر لي أمري.


          </p>
        </div>

        {/* div two */}

        <div className='  grid grid-cols-1 lgl:flex '>


          <div className='container mx-auto'>

            <h1 className='font-bold text-3xl mb-5 '>
              Sumary
            </h1>

            <h4 className='uppercase text-lg text-neutral-500 font-bold m-5	'>
              Diaa Abdulmahdy
            </h4>

            <p className='italic text-neutral-500 '>
              Innovative, deadline-oriented web designer with experience in web design.


            </p>

            <ul className=' text-neutral-500 m-5 '>
              <li className='py-2'>
                Giza Governorate, Egypt
              </li>

              <li className='py-2'>
                +201055030994
              </li>

              <li>
                diaaabdulmahdy@gmail.com
              </li>
            </ul>


            <h1 className='font-bold text-3xl'>
              Education
            </h1>

            <h4 className='uppercase text-lg font-bold text-neutral-500 m-5'>
             Cairo University, Faculty of Computer Science and Information Technology
              <br />
              majoring in Cybersecurity in Cairo, Egypt.
            </h4>

            <p className='m-5 text-neutral-500 italic'>
              languages

            </p>

            <p className='text-neutral-500 m-5'>
              Arabic And English
              <br />





            </p>

            <h1 className=' text-neutral-500 uppercase font-bold text-lg m-5'>
              Courses
            </h1>


            <p className='italic text-neutral-500 m-5'>
           Front-End Development Bootcamp
           <br />
              Skills Area
            </p>

            <p className='text-neutral-500 m-5'>
            HTML, CSS, Bootstrap, JavaScript, DOM, ES6, API, TailwindCSS, React.js, React Router, Redux Toolkit, Axios , ContextAPI, Firebase, Formk 
              <br />



            </p>

          </div>

          <div  >
            <h1 className='font-bold text-3xl mb-5 '>
              Professional Experience

            </h1>


            <h4 className='uppercase text-lg text-neutral-500 font-bold m-5'>
              junior 2 year front end experience
            </h4>

            <p className='italic text-neutral-500 m-5'>
              Giza Governorate, Egypt

            </p>

            <ul className='list-disc text-neutral-500 m-5 '>
              <li className='py-3'>
                Lead in the design, development, and implementation of the graphic, layout, and production communication materials
              </li>

              <li className='py-3'>
                Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
              </li>

              <li className='py-3'>
                Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design
              </li>


            </ul>

            <h4 className=' font-bold uppercase text-neutral-500 m-5'>
              Front-End specialist

            </h4>

            <p className='italic text-neutral-500 m-5'>
              Giza Governorate, Egypt

            </p>


            <ul className='list-disc text-neutral-500 m-5'>
              <li className='py-1'>
                Business website design, entertainment website design

              </li>


              <li className='py-1'>
                Recommended and consulted with clients on the most appropriate  design

              </li>


            </ul>

          </div>


        </div>

      </div>

      {/* End Resume */}





    </div>
  )
}

export default About