import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-blue-900 ">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4 ml-4">
        <div>
          <Link href={"/"} className="font-bold text-2xl p-2 mr-4 border text-white border-white">
            CINEMANIA
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
