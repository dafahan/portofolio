"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  const firstPathName = pathName.split("/")[1];

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className={`w-screen h-screen  ${
          pathName === "/project"
            ? "bg-gradient-to-b from-blue-100 to-white"
            : "bg-gradient-to-b from-blue-100 to-red-100"
        } `}
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`fixed m-auto top-0 p-10 bottom-0 left-0 right-0 text-white sm:text-8xl cursor-default z-50 w-fit h-fit`}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transitionEnd: {
              display: "none",
            },
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {firstPathName.substring(1) === ""
            ? "Dafahan"
            : firstPathName.charAt(0).toUpperCase() +
              firstPathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] ">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
