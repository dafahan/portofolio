"use client";
import { Lexend } from "next/font/google";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const lexend = Lexend({ subsets: ["latin"] });
const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col sm:flex-row px-4 sm:px-8 md:px-12 lg:px-20 py-6 overflow-scroll gap-2">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 sm:h-full sm:w-1/2 flex items-center justify-center">
          <div className="flex h-full flex-col justify-center gap-4 ">
            <h1 className={`text-xl ${lexend.className} font-bold`}>
              Reach Me!
            </h1>
            <div className="cards max-w-[300px] mx-auto font-medium">
              <div className="contact | flex items-center gap-3 mb-5">
                <MdEmail className="w-6 h-6 text-red-500 rounded" />
                <a href="dafahanid@gmail.com">dafahanid@gmail.com</a>
              </div>
              <div className="contact | flex items-center gap-3 mb-5">
                <AiFillInstagram className="w-6 h-6 text-[#2294cf] rounded" />
                <a href="https://instagram.com/dafahan" target="_blank">
                  @dafahan
                </a>
              </div>
              <div className="contact | flex items-center gap-3 mb-5">
                <ImGithub className="w-6 h-6 text-blue-500 rounded" />
                <a href="https://github.com/dafahan" target="_blank">
                  Dafahan
                </a>
              </div>
              <div className="contact | flex items-center gap-3 mb-5">
                <FaLinkedin className="w-6 h-6 text-red-500 rounded" />

                <a href="https://linkedin.com/in/dafahan" target="_blank">
                  Dafa Farhan Haqiqi
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className=" flex  sm:h-full sm:w-1/2 bg-red-50 rounded-xl text-xl  flex-col gap-4 justify-center p-24 font-mono"
        >
          <span className="">Dear dafahan,</span>
          <textarea
            rows={6}
            className="h-full bg-transparent border-b-2 border-b-black outline-none  border-0 resize-none"
            name="message"
          />
          <div className="flex flex-col">
            <span className="flex">My mail address is:</span>
            <input
              name="user_email"
              type="text"
              className="flex bg-transparent border-b-2 border-b-black outline-none border-0"
            />
          </div>
          <span className="flex">Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-400">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
