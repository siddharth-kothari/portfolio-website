
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { skills } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { sectionWrapper } from '../hoc'

const SkillsCard = ({index, title, points}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          options={{
              max: 45,
              scale: 1,
              speed: 450
            }} 
          
          className= "bg-tertiary rounded-[20px] py-5  min-h-[280px] w-100 flex flex-col items-center"
          >
            
            <h3 className='text-white text-[20px] font-bold'>{title}</h3>
            <ul className="mt-5 list-disc ml-2 space-y-2 text-left">
          {points.map((point,index)=> (
            <li key={`skill-point-${index}`} className="text-white-100 text-[16px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
  
        </ul>
        </div>
      </motion.div>
    </Tilt>
  )

}


const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={ styles.sectionSubText }>What I bring to the table</p>
        <h2 className={ styles.sectionHeadText }>Skills</h2>
    

        <div className='mt-10 flex flex-wrap w-[70%] mx-auto justify-center gap-7'>
          {skills.map((skill,index) => (
            <SkillsCard key={skill.title} index={index} {...skill} />
          ))}
        </div>

        
      </motion.div>
    </>
  )
}

export default sectionWrapper(Skills, "skills")