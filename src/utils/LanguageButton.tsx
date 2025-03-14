import { useTranslation } from 'react-i18next';

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };
  return (
    <div>
      <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="p-1 rounded-md text-black cursor-pointer dark:text-white dark:bg-dark"
      >
    <option className="cursor-pointer" value="en">🇺🇸 English</option>
    <option className="cursor-pointer" value="fr">🇫🇷 Français</option>
    {/* <option value="ar">🇸🇦 العربية</option> */}
  </select>
    </div>
  );
};

export default LanguageButton;
