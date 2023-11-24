
// import {motion} from 'framer-motion';
import { avatar } from '../assets';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} grid h-screen text-center place-content-center max-w-7xl mx-auto -mt-12`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <img
            src={avatar}
            width={250}
            height={250}
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
    </section>
  )
}

export default Hero