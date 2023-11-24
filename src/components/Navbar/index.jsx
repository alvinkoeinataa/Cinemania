import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-blue-900 p-5">
      <Link href={"/"} className=" font-bold text-2xl p-2 mr-4 border text-white border-white">
        CINEMANIA
      </Link>
      <Link href={"/search"} className="text-white bg-amber-800 p-3">
        Movie search
      </Link>
    </header>
  );
};

export default Navbar;
