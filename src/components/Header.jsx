import { motion, scale } from "motion/react";

const Header = () => {
  const links = [
    { linkName: "About", url: "#about" },
    { linkName: "Projects", url: "#work" },
    { linkName: "Experience", url: "#experience" },
    { linkName: "Contact", url: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container/70 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex items-center justify-between  px-6 py-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-headline tracking-tight font-black"
        >
          SNEHITH.DEV
        </motion.div>
        <div className="hidden md:flex gap-8 items-center font-headline font-bold text-4">
          {links.map((link, ind) => {
            return (
              <a
                href={link.url}
                className="text-white hover:text-primary transition-colors"
                key={ind}
              >
                {link.linkName}
              </a>
            );
          })}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hero-gradient text-on-primary font-bold py-2 px-6 rounded-md text-sm tracking-wide uppercase cursor-pointer"
          onClick={() => window.open("./Snehith_Resume.pdf")}
        >
          Resume
        </motion.button>
      </div>
    </nav>
  );
};

export default Header;
