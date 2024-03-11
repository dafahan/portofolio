"use client";
import Brain from "@/app/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faRibbon,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { useRef } from "react";
const skills = [
  "Javascript",
  "TypeScript",
  "React.js",
  "Next.js",
  "SCSS",
  "Go",
  "Kotlin",
  "React Native",
  "Laravel",
  "CI4",
  "Django",
  "Git",
  "Figma",
  "SQL",
];
const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const achievementRef = useRef();
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const isAchievementRefInView = useInView(achievementRef, {
    margin: "-100px",
  });
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20  flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-2/3">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}

            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="312"
                height="99"
                viewBox="0 0 1567 998"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M161.253 920.494C223.081 827.752 281.264 732.691 337.789 636.629C391.366 545.576 446.705 453.873 480.895 353.35C501.008 294.214 520.664 229.21 529.574 166.844C534.48 132.504 533.094 76.8166 488.519 71.2447C434.363 64.4753 373.087 86.013 359.783 145.143C343.362 218.125 370.732 294.409 411.395 353.937C458.892 423.469 515.603 488.942 572.388 551C621.751 604.946 681.978 666.913 751.27 695.278C819.839 723.348 911.941 703.539 965.928 654.81C1040.27 587.711 1031.42 512.671 992.321 426.662C942.484 317.022 828.156 326.106 728.983 362.148C500.081 445.337 304.002 595.994 116.386 746.597C100.651 759.228 35.5011 826.381 6.12452 814.631C-11.0516 807.76 35.5538 792.108 51.2849 782.373C238.911 666.273 433.589 566.267 632.798 471.823C746.025 418.142 853.951 340.3 971.793 297.633C984.869 292.899 996.589 294.172 987.336 310.829C982.401 319.711 980.03 355.722 987.629 363.321C1005.11 380.803 1038.77 322.9 1043.05 315.814C1062.62 283.449 1078.31 248.237 1093.78 213.764C1094.84 211.422 1104.41 181.575 1106.1 185.612C1116.94 211.506 1116.63 245.062 1121.94 272.413C1125.71 291.84 1131.65 311.182 1132.49 331.063C1132.98 342.584 1138.72 351.611 1152.43 342.793C1191.51 317.671 1233.21 264.857 1245.39 220.802C1254.01 189.664 1264 148.522 1256.24 116.405C1255.91 115.03 1246.3 85.3803 1243.64 94.7046C1237.01 117.9 1307.97 113.304 1314.89 113.766C1373.84 117.696 1486.71 113.821 1484.39 197.928C1480.64 334.128 1401.29 480.543 1346.57 600.852C1295.13 713.93 1239.93 831.535 1157.13 925.772C1136.34 949.429 1106.85 981.024 1076.78 994.392C1046.54 1007.83 1073.6 927.189 1082.35 895.274C1123.27 745.93 1197.64 603.992 1266.51 466.251C1326.37 346.524 1388.5 229.15 1470.32 122.857C1500.7 83.3904 1542.91 46.8788 1565.33 2.03796"
                  stroke="#1E1E1E"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              onClick={() => scrolltoHash("skills")}
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-14"
            ref={skillRef}
            id="skills"
          >
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              onClick={() => scrolltoHash("experience")}
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center "
            ref={experienceRef}
            id="experience"
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Samsung Innovation Campus Batch 5
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    As a participant , I&apos;m diving into AI, IoT, and C&P
                    technologies.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Computer Science Programs
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - Present{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Lampung University
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - Present{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
            <motion.svg
              onClick={() => scrolltoHash("achievement")}
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* ACHIEVEMENT CONTAINER */}
          <div
            className=" gap-12 justify-center pb-16 "
            ref={achievementRef}
            id="achievement"
          >
            {/* ACHIEVEMENT TITLE */}
            <motion.h1
              initial={{ x: "-200px" }}
              animate={isAchievementRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl mb-4 sticky top-0 "
            >
              ACHEIEVEMENT & CERTIFICATION
            </motion.h1>
            {/* ACHIEVEMENT LIST */}
            <motion.div
              initial={{ x: "-200px" }}
              animate={isAchievementRefInView ? { x: "0" } : {}}
              className="overflow-hidden h-[70%] relative top-12 sm:top-24 lg:top-12  "
            >
              <ul className="max-w-md  animate-loop-scroll">
                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faTrophy} />
                      <h1>1st KSN-K Computer 2021</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Kemendikbudristek</p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faTrophy} />
                      <h1>1st OSAMAKOM Computer Olympiad 2021</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Lampung University</p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faCertificate} />
                      <h1>Meta Back-End Developer</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Coursera</p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faCertificate} />
                      <h1>Google Cybersecurity Coursera</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Coursera</p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faCertificate} />
                      <h1>
                        Assistant lecturer on the basics of programming and the
                        basic structure of algorithms
                      </h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Lampung University</p>
                    </div>
                  </div>
                </li>

                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faCertificate} />
                      <h1>Presenter for internal training, text-based games</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Lampung University</p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faRibbon} />
                      <h1>
                        Competitive Programming Participants GEMASTIK 2022
                      </h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Puspresnas</p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faRibbon} />
                      <h1> Data Science Participants GEMASTIK 2022</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Puspresnas</p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Bot animation */}
              <ul className="max-w-md absolute animate-loop-scroll  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faTrophy} />
                      <h1>1st KSN-K Computer 2021</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Kemendikbudristek</p>
                    </div>
                  </div>
                </li>

                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faTrophy} />
                      <h1>1st OSAMAKOM Computer Olympiad 2021</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Lampung University</p>
                    </div>
                  </div>
                </li>

                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faCertificate} />
                      <h1>Meta Back-End Developer</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Coursera</p>
                    </div>
                  </div>
                </li>

                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faCertificate} />
                      <h1>Google Cybersecurity Coursera</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Coursera</p>
                    </div>
                  </div>
                </li>

                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faCertificate} />
                      <h1>
                        Assistant lecturer on the basics of programming and the
                        basic structure of algorithms
                      </h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Lampung University</p>
                    </div>
                  </div>
                </li>

                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faCertificate} />
                      <h1>Presenter for internal training, text-based games</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Lampung University</p>
                    </div>
                  </div>
                </li>

                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faRibbon} />
                      <h1>
                        Competitive Programming Participants GEMASTIK 2022
                      </h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Puspresnas</p>
                    </div>
                  </div>
                </li>

                <li className="pb-3 sm:pb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <FontAwesomeIcon className="pt-2" icon={faRibbon} />
                      <h1> Data Science Participants GEMASTIK 2022</h1>
                    </div>

                    <div className="flex relative left-8 px-2 rounded bg-white">
                      <p>Puspresnas</p>
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
