import React from "react";
import { navLinks } from "../data/link";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div
          className="mt-20 flex-none
              border-t border-zinc-100 pb-20 pt-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <ul className="flex rounded-full bg-white/90 text-sm font-medium text-zinc-800 ">
                {navLinks.map((link) => (
                  <Link key={link.id} to={link.path}>
                    <li>
                      <a
                        href={link.href}
                        className="relative block font-roboto px-2 md:px-4 py-3 transition hover:text-teal-500 cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <p class="text-sm font-roboto text-zinc-400 dark:text-zinc-500">
              © 2024 Leo Constantin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
