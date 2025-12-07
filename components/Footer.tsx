"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
        <p className="text-sm text-neutral-400 text-center">
          © {new Date().getFullYear()} Founders Fest. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-neutral-300 text-xl">
          <Link
            href="https://www.instagram.com/founders.fest/"
            target="_blank"
            className="hover:text-yellow-400 transition duration-200"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/company/edventure-park/"
            target="_blank"
            className="hover:text-yellow-400 transition duration-200"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://x.com/EdventurePark"
            target="_blank"
            className="hover:text-yellow-400 transition duration-200"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://www.facebook.com/EdVenP/"
            target="_blank"
            className="hover:text-yellow-400 transition duration-200"
          >
            <FaFacebook />
          </Link>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/assets/logo.png"
            alt="Logo 1"
            width={80}
            height={80}
            className="opacity-90 hover:opacity-100 transition"
          />
          <span className="text-neutral-500 text-3xl font-light">|</span>
          <Image
            src="/assets/logo2.png"
            alt="Logo 2"
            width={80}
            height={80}
            className="opacity-90 hover:opacity-100 transition"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
