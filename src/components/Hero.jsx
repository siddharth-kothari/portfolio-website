
// import {motion} from 'framer-motion';
import { avatar } from '../assets';

import { styles } from '../styles';
//import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} grid h-screen text-center place-content-center max-w-7xl mx-auto -mt-12`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <img
            src={avatar}
            className='w-[250px]'
            alt='avatar'
          />
        </div>
        <div className=''>
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className="text-[#915eff]"> Siddharth</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop interactive and responsive Website.
          </p>
          <p className="text-secondary lg:text-[25px] sm:text-[21px] xs:text-[18px] text-[16px] lg:leading-[40px] mt-5 font-semibold">
            I&apos;m a web developer specializing in frontend development. <br />Currently I&apos;m working at <span className="text-[#915eff]">i2e Consulting</span> as a Software Developer.
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-secondary border-4 flex justify-center items-start p-2'>
              <motion.dev 
                animate = {{
                  y: [0,24,0]
                }}
                transition = {{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              /> 
            </div>
          </a>
        </div> */}
    </section>
  )
}

export default Hero