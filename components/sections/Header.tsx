import React from "react";
import Image from "next/image";
import logo from "@/public/Qubit.png";
import Link from "next/link";

import Button from "../Button";
const Header = () => {
  return (
    <header className="w-full h-[70px] md:px-20 px-4 py-4 border-b-[0.5px] border-white/15">
      <div className="flex item-center justify-between">
        <Link href="/" className="flex items-center justify-normal">
          <Image src={logo} alt="Logo" className="w-[40px] mr-3" />
          <p className="text-xl font-bold">Qubit</p>
        </Link>

        <div className="flex items-center justify-normal space-x-5">
          <div className="md:flex hidden items-center justify-normal space-x-5">
            <Link href="https://dot-opal.vercel.app/">Shop</Link>
            <Link href="https://dot-opal.vercel.app/">Community</Link>
            <Link href="https://dot-opal.vercel.app/">Freelance Work</Link>
          </div>
          <Button title="Try Now"></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
