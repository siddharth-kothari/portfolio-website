import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, logo } from '../assets';
import { motion } from "framer-motion";
import { zoomIn } from "./../utils/motion";


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }} >
          <img loading="lazy" src={logo} alt='logo' className=' w-12 h-12 object-fill' />

        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <motion.li
              variants={zoomIn(0, 0.2, 1.1)}
              whileHover="show"
              initial="hidden"
              key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => { setActive(link.title); }} >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img loading="lazy"
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'right-[-100%]' : 'right-0'} block duration-300 ease-out w-full h-screen bg-primary absolute top-16 z-50`}>
            <ul className='list-none flex justify-start mt-10 w-full items-center flex-col gap-4'>
              {navLinks.map((link) => (
                <motion.li
                  variants={zoomIn(0, 0.2, 1.1)}
                  whileHover="show"
                  initial="hidden"
                  key={link.id}
                  className={`${active === link.title
                    ? "text-white"
                    : "text-secondary"
                    } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }} >
                  <a href={`#${link.id}`}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar