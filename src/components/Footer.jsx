




import { styles } from "./../styles";
import { motion } from "framer-motion";
import { zoomIn } from "./../utils/motion";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-10 z-20 bg-primary`}
    >
      <div className="w-full block text-center md:flex justify-between items-center max-w-7xl mx-auto">
        <p className="font-manrope mb-5 md:m-0">
          Developed by Siddharth Kothari
        </p>

        <ul className="list-none flex flex-row gap-10 justify-center">
          <li className={`cursor-pointer`}>
            <a href="https://www.instagram.com/glam2door/" target="blank">
              <motion.p
                variants={zoomIn(0, 0.2)}
                whileHover="show"
                initial="hidden"
              >

              </motion.p>
            </a>
          </li>

          <li className={`cursor-pointer`}>
            <a
              href=""
              target="blank"
            >
              <motion.p
                variants={zoomIn(0, 0.2)}
                whileHover="show"
                initial="hidden"
              >

              </motion.p>
            </a>
          </li>

          <li className={`cursor-pointer`}>
            <a href="mailto:support@glam2door.com" target="blank">
              <motion.p
                variants={zoomIn(0, 0.2)}
                whileHover="show"
                initial="hidden"
              >

              </motion.p>
            </a>
          </li>

          <li className={`cursor-pointer`}>
            <a href="tel:+919975136016" target="blank">
              <motion.p
                variants={zoomIn(0, 0.2)}
                whileHover="show"
                initial="hidden"
              >

              </motion.p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
