/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { sectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
  const recaptcha = useRef();
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    const validationErrors = {};

    if (form.name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (form.email.trim() === "") {
      validationErrors.email = "Email is required";
    }

    if (form.message.trim() === "") {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false)
      return;
    }

    const captchaValue = recaptcha.current.getValue();

    if (!captchaValue) {

      setLoading(false)
      alert("Please verify the reCAPTCHA!");

    } else {

      emailjs.send('service_q7wcc8p', 'template_q5obace',
        {
          from_name: form.name,
          to_name: 'Siddharth',
          from_email: form.email,
          to_email: 'siddharth.kothari.1@icloud.com',
          reply_to: form.email,
          message: form.message,
        }, '7IhcmksCjWYhimJRb'
      ).then(() => {
        setLoading(false);
        alert('Thanks for reaching out to me. I will get back to you as soon as possible.');
        setErrors({});
        recaptcha.current.reset()
        setForm({
          name: '',
          email: '',
          message: '',
        }, (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong.')
        })
      })

    }


  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="text-center">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary border-none"

            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary border-none"

            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary border-none"

            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </label>

          <ReCAPTCHA ref={recaptcha} sitekey="6LfTfRQpAAAAALZaAX6szdFBZYBHUw1nvDo01mXo" />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default sectionWrapper(Contact, "contact");