"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`font-futura rounded p-1 hover:opacity-100 text-sm ${
        pathName === link.url ? "opacity-100" : "opacity-50"
      } `}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
