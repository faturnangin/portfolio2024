import React from "react";
import { House, Menu, BriefcaseBusiness, FolderKanban } from 'lucide-react';
import ThemeToggle from "./ThemeToggle";
export function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    React.useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <header className={`sticky top-0 z-50 flex justify-between items-center text-black py-4 px-4 md:px-12 lg:px-20 transition-all duration-300 ${isScrolled ? "backdrop-blur-3xl bg-opacity-75 bg-white dark:bg-deepblue border-b dark:border-slate-600 drop-shadow-md" : "bg-transparent"}`}>
        <a href="/" className="text-lg font-semibold dark:text-white">Fatur Nangin</a>
        <ul className="hidden xl:flex xl:gap-4 fixed left-1/2 -translate-x-1/2 items-center gap-12 font-semibold text-base">
            <li>
              <a href="/" className="px-4 py-2 rounded-md border border-black dark:border-white bg-white dark:bg-deepblue text-black dark:text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#expertise" className="px-4 py-2 rounded-md border border-black dark:border-white bg-white dark:bg-deepblue text-black dark:text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="px-4 py-2 rounded-md border border-black dark:border-white bg-white dark:bg-deepblue text-black dark:text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200">
                Project
              </a>
            </li>
        </ul>
        <div className="flex items-center gap-2">
        <ThemeToggle className="px-2 py-2 rounded-md border border-black dark:border-white bg-white dark:bg-deepblue text-black dark:text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200" />
        <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="block xl:hidden px-2 py-2 rounded-md border border-black dark:border-white bg-white dark:bg-deepblue text-black dark:text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200">
          <Menu className="w-5 h-5"/>
        </button>
        <div className={`z-50 absolute xl:hidden top-[70px] left-0 w-full bg-white dark:bg-deepblue dark:text-white flex flex-col items-center font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition : "transform 0.3s ease, opacity 0.3s ease"}}>
          <a href="/" className="list-none border-b border-neutral-600 flex items-center justify-center gap-2 w-full text-center p-4 hover:bg-deepblue dark:hover:bg-white hover:text-white dark:hover:text-deepblue transition-colors duration-300 cursor-pointer">
            <House/>
            <span>Home</span>
          </a>
          <a href="#expertise" className="list-none border-b border-neutral-600 flex items-center justify-center gap-2 w-full text-center p-4 hover:bg-deepblue dark:hover:bg-white hover:text-white dark:hover:text-deepblue transition-colors duration-300 cursor-pointer">
            <BriefcaseBusiness/>
            <span>Services</span>
          </a>
          <a href="#portfolio" className="list-none flex items-center justify-center gap-2 w-full text-center p-4 hover:bg-deepblue dark:hover:bg-white hover:text-white dark:hover:text-deepblue transition-colors duration-300 cursor-pointer">
            <FolderKanban/>
            <span>Project</span>
          </a>
        </div>
        </div>
      </header>
    );
}