"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "../components/card";
import Link from "next/link";
import items from "./projectData";

const ProjectPage = () => {
  const alert = useRef(null);
  function showAlert() {
    alert.current.style.display = "block";
    setTimeout(() => {
      hideAlert();
    }, 3000);
  }

  function hideAlert() {
    alert.current.style.display = "none";
  }

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" relative">
        <div className="w-screen relative h-[calc(100vh-6rem)] flex flex-col items-center justify-center md:text-8xl text-6xl text-center font-bold">
          My Works
          <div
            onClick={() => scrolltoHash("projectsSection")}
            className="absolute bottom-4"
          >
            <motion.svg
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
        </div>

        <div className="sticky top-0 flex flex-col " id="projectsSection">
          <div className="flex w-screen flex-col">
            {items
              .reduce((acc, item, index) => {
                if (index % 2 === 0) {
                  acc.push([item]);
                } else {
                  acc[acc.length - 1].push(item);
                }
                return acc;
              }, [])
              .map((pair, pairIndex) => (
                <div
                  key={pairIndex}
                  className="flex w-full flex-col md:flex-row"
                >
                  {pair.map((item) => (
                    <Card key={item.id} item={item} />
                  ))}
                </div>
              ))}
          </div>

          <div className="relative flex h-[20vh] w-screen justify-center items-center font-gotham font-[400] bg-[#f9f9f9]">
            <div
              onClick={() => showAlert()}
              className="flex w-30 border-4 border-black p-3 hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              MORE WORK
            </div>
            <div
              class="absolute bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 hidden"
              role="alert"
              ref={alert}
            >
              <p class="text-sm">
                {"sorry it's currently under development :("}
              </p>
            </div>
          </div>

          <div className="flex  w-screen lg:h-[60vh] flex-col lg:flex-row">
            <div className="p-4 flex bg-[#ECECEC] h-full w-full flex-col items-center ">
              <div className="flex flex-col w-[60%] h-[20%] justify-end">
                <h4 className="font-futura ">SERVICES</h4>
                <hr className="w-20 border-t-[5px] border-black " />
              </div>
              <div className="flex flex-col w-[60%] lg:h-[80%] justify-start mt-4">
                <h6 className="font-medium font-xs my-2">
                  BRANDING & STRATEGY
                </h6>
                <p className="font-light font-xs/[3px]">
                  A brand is what you believe in. What you stand for. Whether a
                  new or established business or organization, you can look to
                  us to best articulate who you are, what you do, and most
                  importantly, why any of it matters.
                </p>
              </div>
            </div>
            <div className="p-4 flex bg-[#999999] w-full flex-col items-center ">
              <div className="flex flex-col w-[60%] h-[20%] justify-end opacity-0"></div>
              <div className="flex flex-col w-[60%] lg:h-[80%] justify-start mt-4">
                <h6 className="font-medium font-xs my-2">
                  WEB & INTERACTIVE DESIGN
                </h6>
                <p className="font-light font-xs/[3px]">
                  We know that exceptional website experiences are a blend of
                  the right message and the right technology. That's why our
                  interactive design approach focuses on usability,
                  accessibility impact, and achieving results.
                </p>
              </div>
            </div>
            <div className="p-4 flex bg-[#ECECEC] w-full flex-col items-center ">
              <div className="flex flex-col w-[60%] h-[20%] justify-end opacity-0"></div>
              <div className="flex flex-col w-[60%] lg:h-[80%] justify-start mt-4">
                <h6 className="font-medium font-xs my-2">
                  WEB & APPLICATION DEVELOPMENT
                </h6>
                <p className="font-light font-xs/[3px]">
                  The best-planned experience is wasted without a top-notch
                  implementation. We craft supremely functional websites and
                  applications engineered for stability, performance, and
                  long-term adaptability.
                </p>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="w-screen flex lg:h-[60vh] bg-[#222222] flex-col lg:flex-row">
            <div className="flex w-full h-full flex-col text-white justify-between bg-[#1D1D1D]">
              <h1 className="text-4xl p-8 font-bold cursor-pointer font-helvetica italic hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]">
                Dafahan.
              </h1>
              <p className="font-thin text-white absolute bottom-4 left-8">
                2024 Dafahan. All rights reserved
              </p>
            </div>
            <div className="flex w-full text-white justify-between ">
              <div className="flex relative left-8 my-12 lg:my-0 w-full text-2xl h-full flex-col justify-evenly items-start lg:items-start lg:pl-12">
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={"/about"}
                >
                  About
                </Link>
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={"/project"}
                >
                  Projects
                </Link>
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={"/contact"}
                >
                  Contact
                </Link>
              </div>
              <div className="flex w-full text-2xl my-12 lg:my-0 h-full flex-col justify-evenly items-start lg:items-start lg:pl-12">
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={"https://www.instagram.com/dafahan"}
                >
                  Instagram
                </Link>
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={"/https://www.linkedin.com/in/dafahan"}
                >
                  Linkedin
                </Link>
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={"https://www.facebook.com/dafahanz"}
                >
                  Facebook
                </Link>
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={"https://github.com/dafahan"}
                >
                  Github
                </Link>
              </div>
            </div>
            <div className="flex   w-full flex-col text-white justify-between ">
              <div className="flex pl-8 text-2xl h-full flex-col justify-start items-start justify-evenly">
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={
                    "https://www.privacypolicyonline.com/live.php?token=UF153WYrAfeXPyNY0MV9MOCtcGwJ1tri"
                  }
                >
                  Privacy Policy
                </Link>
                <Link
                  className="hover:[text-shadow:_0_1px_2px_rgb(255,255,255)]"
                  href={
                    "https://www.termsfeed.com/live/d2450933-9987-4d82-b564-f11dbed99e7d"
                  }
                >
                  Terms Of Service
                </Link>
                <div className="opacity-0 cursor-default">Terms Of Service</div>
                <div className="opacity-0 cursor-default">Terms Of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
