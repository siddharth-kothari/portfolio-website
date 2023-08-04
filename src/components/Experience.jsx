import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences,educations } from "../constants";
import { sectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{background:'#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point,index)=> (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}

      </ul>
    </div>
  </VerticalTimelineElement>
)

const EducationCard = ({ education }) => (
  <VerticalTimelineElement 
    contentStyle={{background:'#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={education.date}
    iconStyle={{background: "#fff"}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
          <img 
            src={education.icon}
            alt={education.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{education.company_name}</p>
      <p className="text-white-100 text-[14px] pl-1 tracking-wider">{education.points}</p>
      
    </div>
  </VerticalTimelineElement>
)


const Experience = () => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(true);
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const handleEducation = () => {
    setIsEducationOpen(true);
    setIsExperienceOpen(false);
  } 

  const handleExperience = () => {
  setIsEducationOpen(false);
  setIsExperienceOpen(true);
  }

  return (
   <>
    <motion.div
      variants={textVariant()}
      className='text-center'
    >
      <p className={ styles.sectionSubText }>What I done so far</p>
      <h2 onClick={handleExperience} className={ styles.sectionHeadText }>Background</h2>
      <div className="flex justify-around mt-[20px] md:mt-[30px]">
        <h2 onClick={handleExperience} className={ `text-[25px] md:text-[40px] font-black cursor-pointer ${!isExperienceOpen ? "opacity-50" : ""}` }>Experience</h2>
        <h2 onClick={handleEducation} className={ `text-[24px] md:text-[40px] font-black cursor-pointer ${!isEducationOpen ? "opacity-50" : ""}`  }>Education</h2>
      </div>
    </motion.div>

    {isExperienceOpen && (
      <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience,index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    )}

    {isEducationOpen && (
      <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {educations.map((education,index) => (
          <EducationCard key={index} education={education}/>
        ))}
      </VerticalTimeline>
    </div>
    )}
   </>
  )
} 

export default sectionWrapper(Experience,"background")