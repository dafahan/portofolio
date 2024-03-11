"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot, RxGithubLogo } from "react-icons/rx";
import { RiCodeView } from "react-icons/ri";
import { usePathname } from "next/navigation";
import items from "../projectData";
import Link from "next/link";

function Page() {
  const frame = useRef();
  const pathName = usePathname();
  const id = pathName.split("/")[2];
  const project = items[id];
  const stack = project.stack;
  const slides = project.slides;
  const [currentIndex, setCurrentIndex] = useState(0);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const prevSlide = async () => {
    frame.current.style.filter = "blur(5px)";
    await sleep(200);
    frame.current.style.filter = "none";
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = async () => {
    frame.current.style.filter = "blur(5px)";
    await sleep(200);
    frame.current.style.filter = "none";
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevSlide, nextSlide]);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="flex w-full h-full justify-center items-center "
    >
      {/* CONTAINER */}

      <div className="flex h-full w-full flex-col">
        <div className="flex flex-col max-w-[1400px] h-[780px] w-full m-auto px-4 relative group text-center ">
          <div className="w-full h-full lg:max-h-[50vh] max-h-[40vh] sm:max-h-[45vh]  rounded-2xl flex justify-center items-center select-none transition duration-500  transition-all">
            <Image
              ref={frame}
              alt=""
              src={slides[currentIndex]}
              height={200}
              width={1000}
              className="object-contain duration-500 transition h-full transition-all"
            ></Image>
          </div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 lg:left-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 lg:right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center pt-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer "
              >
                {currentIndex == slideIndex ? <RxDotFilled /> : <RxDot />}
              </div>
            ))}
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="flex flex-col w-full select-none  sm:px-8 md:px-12 lg:px-20">
          <div className="flex p-4 flex-col text-center justify-center items-center relative p-8">
            <h4 className="font-bold py-2">{project.title}</h4>
            <p className="flex justify-center-items-center">
              {project.fulldesc}
            </p>
            <div className="flex justify-center w-full gap-2 relative p-3">
              {stack.map((item) => (
                <Image
                  width={80}
                  height={0}
                  key={item}
                  src={item}
                  alt=""
                  objectFit="contain"
                  className="hover:scale-110 h-6"
                ></Image>
              ))}
            </div>
            <div className="flex justify-around w-56 self-center items-center ">
              {project.source && (
                <Link
                  target="_blank"
                  href={project.source}
                  className="flex outline-2 outline-black hover:bg-black transition-all duration-500 outline hover:text-white hover:scale-110 text-black font-bold h-8 w-24 justify-around items-center rounded"
                >
                  <RxGithubLogo /> GitHub
                </Link>
              )}
              {project.demo && (
                <Link
                  target="_blank"
                  href={project.demo}
                  className="flex outline-2 outline-black hover:bg-black transition-all duration-500 outline hover:text-white hover:scale-110 text-black font-bold h-8 w-24 justify-around items-center rounded"
                >
                  <RiCodeView /> Demo
                </Link>
              )}
            </div>
          </div>

          {/* STACK */}
        </div>
      </div>
    </motion.div>
  );
}

export default Page;
