import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8, Project9 } from '../assets/Images'

const Projects = () => {
  return (
    <div className='pt-[100px]'>


      <section>

          {/* Div One */}
      <div className='container text-center items-center mx-auto m-[50px]  '>
                    <h1 className='text-4xl font-serif font-bold'>
                        Projects
                    </h1>
                    <div className="bg-pink-700 flex m-auto mb-5 w-[50px] h-[3px] mt-3"></div>


                    <p className='text-neutral-600'>
                    قال رب اشرح لي صدري ويسر لي أمري. 
                    </p>
                </div>
                {/*  Div Two Projects  */}
                <div className='  container mx-auto  grid grid-cols-1 sm:grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 gap-10 ' >

                  <div className='shadow-md  px-[50px] py-10 transition-transform duration-300 hover:scale-90 sm:mb-20 mdl:mb-0 m-auto'>
                  <img  src={Project1} className='h-[300px] mx-10 w-[200px] rounded-lg' alt="" />
                  
                    <h1 className='text-3xl font-bold font-serif py-5'>First Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae 
                      perspiciatis porro alias iure exercitationem quibusdam?</p>
                      <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://coffe-two-sage.vercel.app/'}>
                  View
                  </NavLink>
                  </div> 

                  <div className='shadow-md   px-[50px] py-10 transition-transform duration-300 hover:scale-90 sm:mb-20 mdl:mb-0 m-auto'>
                  <img  src={Project2} className='h-[300px] mx-10 w-[200px] rounded-lg' alt="" />
                    <h1 className='text-3xl font-bold font-serif py-5'>Second Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque 
                      molestiae perspiciatis porro alias iure exercitationem quibusdam?</p>
                  <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://e-commerce-shopease.vercel.app/'}>View</NavLink>
                  
                  </div> 

                  <div className='shadow-md   px-[50px] py-10 transition-transform duration-300 hover:scale-90 sm:mb-20 m-auto mdl:mb-0  '>
                  <img className=' h-[300px] mx-10 w-[200px] rounded-lg' src={Project3}  alt="" />
                    <h1 className='text-3xl font-bold font-serif py-5'>Third Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque
                       molestiae perspiciatis porro alias iure exercitationem quibusdam?</p>
                  <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://clarity-nine-wheat.vercel.app/'}>View</NavLink>
                  
                  </div> 


                  


                </div>
             
              

            {/* div two */}
               <div className=' justify-around container mx-auto grid grid-cols-1 sm:grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 mt-14 gap-10'>


               <div className='shadow-md px-[50px] py-10  transition-transform duration-300 hover:scale-90 sm:mb-20 m-auto mdl:mb-0'>
               <img  src={Project4} className='h-[300px] mx-10 w-[200px] rounded-lg' alt="" />
                  
                    <h1 className='text-3xl font-bold font-serif py-5'>Fourth Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae 
                      perspiciatis porro alias iure exercitationem quibusdam?</p>
                      <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://booking-five-alpha.vercel.app/'}>
                      View
                      </NavLink>
                  </div> 


                  <div className='shadow-md px-[50px] py-10 transition-transform duration-300 hover:scale-90 sm:mb-20 m-auto mdl:mb-0'>
                  <img  src={Project5} className='h-[300px] mx-10 w-[200px] rounded-lg' alt="" />
                  
                    <h1 className='text-3xl font-bold font-serif py-5'>Fifth Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae 
                      perspiciatis porro alias iure exercitationem quibusdam?</p>
                      <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://modest-ramanujan-f625b4.netlify.app/'}>
                      View
                      </NavLink>
                  </div> 


                  <div className='shadow-md   px-[50px] py-10 transition-transform duration-300 hover:scale-90 sm:mb-20 m-auto mdl:mb-0'>
                  <img  src={Project6} className='h-[300px] mx-10 w-[200px] rounded-lg' alt="" />
                  
                    <h1 className='text-3xl font-bold font-serif py-5'>Sixth Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae 
                      perspiciatis porro alias iure exercitationem quibusdam?</p>
                      <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://modest-ramanujan-f625b4.netlify.app/'}>
                  View
                  </NavLink>
                  </div> 

               </div>


               {/* div three */}

               <div className=' justify-around container mx-auto  grid grid-cols-1 sm:grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 mt-14 gap-10'>



               <div className='shadow-md  px-[50px] py-10 transition-transform duration-300 hover:scale-90 sm:mb-20 mdl:mb-0 m-auto'>
               <img  src={Project7} className='h-[300px] mx-10 w-[200px] rounded-lg' alt="" />
                  
                    <h1 className='text-3xl font-bold font-serif py-5'>Seventh Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae 
                      perspiciatis porro alias iure exercitationem quibusdam?</p>
                      <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://modest-ramanujan-f625b4.netlify.app/'}>
                  View
                  </NavLink>
                  </div> 


                  <div className='shadow-md  px-[50px] py-10 transition-transform duration-300 hover:scale-90 sm:mb-20 mdl:mb-0 m-auto'>
                  <img  src={Project8} className='h-[300px] mx-10 w-[200px] rounded-lg' alt="" />
                  
                    <h1 className='text-3xl font-bold font-serif py-5'>Eighth Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae 
                      perspiciatis porro alias iure exercitationem quibusdam?</p>
                      <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://modest-ramanujan-f625b4.netlify.app/'}>
                  View
                  </NavLink>
                  </div> 



                  <div className='shadow-md px-[50px] py-10 transition-transform duration-300 hover:scale-90 sm:mb-20 mdl:mb-0 m-auto'>
                  <img  src={Project9} className='h-[300px] mx-10 w-[200px] rounded-lg'  alt="" />
                 
                    <h1 className='text-3xl font-bold font-serif py-5'>nine Project</h1>
                    <p className='font-serif text-neutral-600 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae 
                      perspiciatis porro alias iure exercitationem quibusdam?</p>
                      <NavLink target='_blank' className={'text-red-700 font-serif font-bold text-2xl'} to={'https://modest-ramanujan-f625b4.netlify.app/'}>
                  View
                  </NavLink>
                  </div> 



               </div>


      </section>


    </div>
  )
}

export default Projects
