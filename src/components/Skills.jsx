/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Tilt } from 'react-tilt'

import { styles } from '../styles'
import { skills } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from '../hoc'
import { MdCircle } from "react-icons/md";


import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

// const SkillsCard = ({ points }) => {
//   return (
//     <div>
//       <ul className="mt-5 list-disc ml-2 space-y-2 text-left">
//         {points.map((point, index) => (
//           <li key={`skill-point-${index}`} className="text-white-100 text-[16px] pl-1 tracking-wider">
//             {point}
//           </li>
//         ))}

//       </ul>
//     </div>
//   )

// }




const Skills = () => {

  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
        <motion.div className="scroller font-extrabold uppercase flex whitespace-nowrap flex-nowrap" style={{ x }}>
          <span className='flex gap-5 mr-7'>{children} </span>
          <span className='flex gap-5 mr-7'>{children} </span>
          <span className='flex gap-5 mr-7'>{children} </span>
          <span className='flex gap-5 mr-7'>{children} </span>
          <span className='flex gap-5 mr-7'>{children} </span>
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={styles.sectionSubText}>What I bring to the table</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className='mt-10'>
        {skills.map(({ points }, index) => (
          <div key={index} className='flex gap-4 whitespace-nowrap'>
            <ParallaxText baseVelocity={`${index % 2 === 0 ? -1.5 : 1.5}`}>
              {points.map((point, index) => (
                <div key={index} className='mb-10 flex gap-5 whitespace-nowrap items-center'>
                  <span key={`skill-point-${index}`} className=" !m-0 text-4xl text-[3rem] leading-[3rem] font-extrabold pl-1 blue-text-gradient tracking-tighter uppercase">
                    {point}
                  </span>
                  <span className='text-2xl blue-text-gradient'>
                    <MdCircle className="pink-text-gradient" />
                  </span>
                </div>

              ))}
            </ParallaxText>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills