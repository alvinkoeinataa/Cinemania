import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-blue-900 ">
      <div className="p-5">
        <Link href={"/"} className="font-bold text-2xl p-2 mr-4 border text-white border-white">
          CINEMANIA
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
