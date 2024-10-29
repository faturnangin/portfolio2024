import { createLazyFileRoute } from '@tanstack/react-router'
import { TechMarquee } from '../components/TechMarquee'
import { Hero } from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import { Expertise } from '../components/Expertise'
import { Portfolio } from '../components/Portfolio'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedIns.svg'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='px-4 md:px-12 lg:px-20'>
      <Hero/>
      <TechMarquee/>
      <div className="container mx-auto mt-6" id='expertise'>
        <div className="flex flex-col items-center space-y-10">
          <SectionTitle title='Expertise'/>
          <Expertise/>
        </div>
      </div>
      <div className="container mx-auto mt-6" id='portfolio'>
        <div className="flex flex-col items-center space-y-10">
          <SectionTitle title='Portfolio'/>
          <Portfolio/>
        </div>
      </div>
      <div className="mt-6 h-0.5 w-full bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-400"/>
      <div className="container mx-auto my-6">
        <div className="flex items-center justify-between">
          <div className='text-md'>Fatur Nangin @2024</div>
          <div className="flex space-x-5">
            <a href='https://github.com/faturnangin/'><button className="w-10 h-10 flex justify-center items-center bg-grayscale2 dark:bg-grayscale4 rounded-xl"><img src={github} alt="" className="invert dark:invert-0" /></button></a>
            <a href='https://www.linkedin.com/in/nangin/'><button className="w-10 h-10 flex justify-center items-center bg-grayscale2 dark:bg-grayscale4 rounded-xl"><img src={linkedin} alt="" className="invert dark:invert-0" /></button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
