import { useTheme } from "@/common/ThemeContext";
import { Theme } from "@/common/ThemeContext";
import themeIconLight from '../../assets/sun.svg'
import themeIconDark from '../../assets/moon.svg'
import { toast } from "sonner";
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
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-6xl w-full mx-auto px-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              className="flex-none focus:outline-none focus:opacity-80 group"
              href="#"
              aria-label="Home"
            >
              <span className="font-display text-xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-200">
                SK<span className="text-accent">.</span>
              </span>
            </a>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-9 flex justify-center items-center rounded-lg border border-border bg-background hover:bg-secondary focus:outline-none focus:bg-secondary transition-colors duration-200"
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <svg className="hs-collapse-open:hidden shrink-0 size-4 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div
            id="hs-navbar-example"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
            aria-labelledby="hs-navbar-example-collapse"
          >
            <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:gap-8">
              <a
                className="font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-accent focus:outline-none focus:text-accent transition-colors duration-200"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-accent focus:outline-none focus:text-accent transition-colors duration-200"
                href="#timeline"
              >
                Experience
              </a>
              <a
                className="font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-accent focus:outline-none focus:text-accent transition-colors duration-200"
                href="#projects"
              >
                Projects
              </a>
              
              {/* Theme toggle */}
              <button
                className="flex items-center justify-center size-9 rounded-full border border-border bg-background hover:bg-secondary hover:border-accent/30 focus:outline-none transition-all duration-200"
                onClick={() => {
                  setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
                  toast(`Theme: ${theme === Theme.Light ? "Dark" : "Light"} mode`)
                }}
                aria-label="Toggle theme"
              >
                <img className="w-4 h-4 opacity-70" src={themeIcon} alt="" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </motion.div>
  )
}

export default Navbar
