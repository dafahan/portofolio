"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TextAnim from "./components/textAnim";
import Link from "next/link";

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
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center select-none">
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
            <Link
              target="_blank"
              href="https://www.canva.com/design/DAF-ogw5qSM/t_1oMxAsa3JNBzBvU3Askw/edit?utm_content=DAF-ogw5qSM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="flex p-4 rounded-lg ring-1 w-32 justify-center cursor-pointer ring-black bg-black text-white hover:scale-90 duration-500 transition-all"
            >
              Resume
            </Link>
            <Link
              href="contact"
              className="flex p-4 rounded-lg ring-1 w-32 justify-center cursor-pointer ring-black hover:scale-90 duration-500 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
