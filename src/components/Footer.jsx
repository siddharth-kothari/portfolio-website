



import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { styles } from "./../styles";
import { motion } from "framer-motion";
import { zoomIn } from "./../utils/motion";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-10 z-20 bg-primary`}
    >
      <div className="w-full block text-center md:flex justify-between items-center max-w-7xl mx-auto">
        <p className="font-poppins text-[18px] mb-5 md:m-0 text-[#915eff]">
          Developed by Siddharth Kothari
        </p>

        <ul className="list-none flex flex-row gap-10 justify-center">
          <li className={`cursor-pointer`}>
            <Link to="https://instagram.com/_siddharthkothari_" target="blank" aria-label="Siddharth's Instagram account">
              <motion.p
                variants={zoomIn(0, 0.2)}
                whileHover="show"
                initial="hidden"
              >
                <AiOutlineInstagram className='text-[#915eff] w-[28px] h-[28px]' />
              </motion.p>
            </Link>
          </li>

          <li className={`cursor-pointer`}>
            <Link
              to="https://github.com/siddharth-kothari"
              target="blank"
              aria-label="Siddharth's GitHub account"
            >
              <motion.p
                variants={zoomIn(0, 0.2)}
                whileHover="show"
                initial="hidden"
              >
                <AiOutlineGithub className='text-[#915eff] w-[28px] h-[28px]' />
              </motion.p>
            </Link>
          </li>

          <li className={`cursor-pointer`}>
            <Link to="https://www.linkedin.com/in/siddharthkothari01/" target="blank" aria-label="Siddharth's LinkedIn account">
              <motion.p
                variants={zoomIn(0, 0.2)}
                whileHover="show"
                initial="hidden"
              >
                <AiOutlineLinkedin className='text-[#915eff] w-[28px] h-[28px]' />
              </motion.p>
            </Link>
          </li>

          <li className={`cursor-pointer`}>
            <Link to="mailto:sidkothari005@gmail.com" target="blank" aria-label="Siddharth's Email account">
              <motion.p
                variants={zoomIn(0, 0.2)}
                whileHover="show"
                initial="hidden"
              >
                <AiOutlineMail className='text-[#915eff] w-[28px] h-[28px]' />

              </motion.p>
            </Link>
          </li>


        </ul>
      </div>
    </footer>
  );
};

export default Footer;
