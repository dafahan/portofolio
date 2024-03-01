"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const firstPathName = pathName.split("/")[1];
  return (
    <Link
      className={`font-futura rounded p-1 hover:opacity-100 text-sm ${
        firstPathName === link.url.substring(1) ? "opacity-100" : "opacity-50"
      } `}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
