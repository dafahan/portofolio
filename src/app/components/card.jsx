import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Card({ item }) {
  const [isHover, setHover] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Link
      href={"/project/" + item.id}
      className="flex w-full md:w-1/2 overflow-hidden relative sm:h-64 lg:h-96 md:h-72"
      onMouseEnter={() => {
        setHover(true);
        setHoveredId(item.id);
      }}
      onMouseLeave={() => {
        setHover(false);
        setHoveredId(null);
      }}
    >
      <Image
        src={item.img}
        alt=""
        width={1000}
        height={0}
        className={`w-full object-cover ${
          isHover && item.id === hoveredId
            ? "scale-125 transition-all duration-300"
            : ""
        }`}
      />
      <div
        className={`flex justify-center items-center absolute top- w-full inset-0 ${
          isHover && item.id === hoveredId ? "opacity-[95%]" : "opacity-0"
        }`}
        style={{ backgroundColor: item.color, transition: "opacity 0.3s" }}
      >
        <div className="w-[50%] h-[50%] flex justify-center items-start flex-col p-4 leading-[35px]">
          <p className="text-sm text-white  font-futura my-2">
            {item.title.toUpperCase()}
            <br />
          </p>
          <hr className="w-20 border-t-[5px] border-white my-2" />

          <h2 className="text-white font-futura text-2xl my-2">{item.desc}</h2>
        </div>
      </div>
    </Link>
  );
}
