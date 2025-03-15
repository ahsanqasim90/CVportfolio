import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-[#33353F] text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <Image src="/images/LOGO.png" alt="Company Logo" width={55} height={55} />
        </Link>
        <p className="text-slate-600 mt-4 md:mt-0">© {currentYear} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
