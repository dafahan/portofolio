"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TextAnim from "./components/textAnim";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="opacity-0 md:opacity-100 h-1/5  md:h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            alt=""
            src="/heroku.png"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50  vw, 200px"
            priority
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold font-futura">
            <TextAnim text="Hi, I'am Dafahan" dur={5} />
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Step into my digital realm, where innovation and creativity unite.
            With an acute sense of aesthetics and a command over coding, my
            portfolio presents an array of projects, each embodying my
            dedication to excellence and my fervent desire to contribute to the
            ever-evolving world of &lt;code/&gt; .
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
