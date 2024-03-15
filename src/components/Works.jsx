/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion"
import { styles } from "../styles"
import { website } from "../assets";
import { sectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import React, { useRef } from "react";

const ProjectCard = ({ index, name, description, tags, image, color, live_link, progress, targetScale, range }) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const containerScale = useTransform(progress, range, [1, targetScale]);
  console.log(targetScale);
  return (
    <div ref={container} className="cardContainer mx-auto h-[100vh] grid place-content-center sticky top-0">
      <motion.div style={{ boxShadow: "0px 0px 8px 2px rgba(47,128,237,1)", scale: containerScale, top: `calc(-15% + ${index * 35}px)` }} className={`mx-auto relative bg-tertiary card sm:w-[80%] min-h-[500px] rounded-lg p-6`}>
        <h2 className="text-center text-2xl md:text-4xl font-extrabold font-sans mb-10">{name}</h2>
        <div className="lg:flex lg:gap-5 items-center lg:justify-between">
          <div className="imageContainer relative mx-auto lg:w-[50%] h-full rounded-2xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="inner w-full h-full">
              <img src={image}
                alt={name}
                className=" object-cover"
              />
            </motion.div>
          </div>
          <div className="flex lg:pl-5 flex-col gap-5 lg:w-[50%] mt-10 lg:mt-0">
            <p className="md:text-[24px] ">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img loading="lazy" src={website}
                alt="github"
                className="w-1/2 h-1/2 object-contain" />

            </div>
          </div>


        </div>
      </motion.div>
    </div>
  )
}

const Works = () => {
  const containers = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containers,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containers}>
      <motion.div
        variants={textVariant()}
        className='text-center !opacity-100'
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>


      {projects.map((project, index) => {
        const targetScale = 1 - ((projects.length - index) * 0.05);
        return <ProjectCard key={`project-${index}`} {...project} index={index} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
      })}
    </div>
  )
}

export default sectionWrapper(Works, "projects")