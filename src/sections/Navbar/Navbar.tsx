import { useTheme } from "@/common/ThemeContext";
import { Theme } from "@/common/ThemeContext";
import themeIconLight from '../../assets/sun.svg'
import themeIconDark from '../../assets/moon.svg'
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { slideDown } from "@/lib/animations";

function Navbar() {

  const { theme, setTheme } = useTheme();
  const themeIcon = theme === Theme.Light ? themeIconLight : themeIconDark;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideDown}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-white/20 dark:border-neutral-700/30 shadow-sm">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
              <span className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
                SK
              </span>
            </a>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 text-gray-800 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-700/50 focus:outline-none focus:bg-gray-50 dark:focus:bg-neutral-700/50 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a className="font-medium text-gray-600 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none focus:text-blue-500 transition-colors duration-200" href="#skills">Skills</a>
              <a className="font-medium text-gray-600 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none focus:text-blue-500 transition-colors duration-200" href="#timeline">Experience</a>
              <a><Button variant="outline" size="icon" className="bg-white/50 dark:bg-neutral-800/50 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:cursor-pointer border-gray-200 dark:border-neutral-700 transition-all duration-200" onClick={() => {
                setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
                toast(`Page Theme set to: ${theme === Theme.Light ? "Dark" : "Light"}`)
              }} >
                <img className="relative w-5 h-5" src={themeIcon} alt="theme icon" />
              </Button>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </motion.div>
  )
}

export default Navbar
