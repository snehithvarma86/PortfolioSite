import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background w-full py-12 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-bold text-white">
            Sai Snehith Varma Muthyam
          </div>
          <p className="text-sm text-on-surface-variant">
            © 2024 Sai Snehith Varma Muthyam.
          </p>
        </div>
        <div className="flex gap-8">
          {[
            {
              icon: <FaGithub size={24} />,
              label: "GitHub",
              url: "https://github.com/snehithvarma86/",
            },
            {
              icon: <FaLinkedin size={24} />,
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/sai-snehith-varma/",
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              className="text-on-surface-variant hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
            >
              <span className="opacity-80 group-hover:opacity-100">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
