import LanguageButton from "../../utils/LanguageButton";
import ThemeToggle from "../../utils/ThemeToggle";
import { HamburgerSVG } from "../../assets/SVGs";
import { useCustomTranslation } from '../../hooks/useCustomTranslation';
import { useEffect, useRef } from "react";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const { t } = useCustomTranslation();
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm dark:bg-dark/90 dark:text-white dark:border-dark">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <p className="text-2xl font-bold">Richardnak Uch</p>

        <div className="block lg:hidden ml-auto">
          <button
            ref={hamburgerRef}
            className="text-black dark:text-white"
            aria-label="Toggle menu"
            onClick={toggleMenu}>
            <HamburgerSVG />
          </button>
        </div>

        {/* Navbar Menu */}
        <nav>
          <ul className="hidden lg:flex space-x-1">
            <li><a href="#about">{t("navbar.about")}</a></li>
            <li><a href="#skills">{t("navbar.skills")}</a></li>
            <li><a href="#projects">{t("navbar.projects")}</a></li>
            <li><a href="#contact">{t("navbar.contact")}</a></li>
            <li className="ml-6"><ThemeToggle /></li>
            <li className=""><LanguageButton /></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed right-0 bg-light dark:bg-dark p-4 z-20 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
      
        onClick={(e) => {
          e.stopPropagation()
        }}>
        <ul className="flex flex-col items-end text-right">
          <li className="my-2"><a href="#about">{t("navbar.about")}</a></li>
          <li className="my-2"><a href="#skills">{t("navbar.skills")}</a></li>
          <li className="my-2"><a href="#projects">{t("navbar.projects")}</a></li>
          <li className="my-2"><a href="#contact">{t("navbar.contact")}</a></li>
          <li className="my-2"><ThemeToggle /></li>
          <li className="my-2"><LanguageButton /></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
