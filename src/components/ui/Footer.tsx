import { useCustomTranslation } from '../../hooks/useCustomTranslation';
import packageJson from '../../../package.json';

const Footer = () => {
  const { t } = useCustomTranslation();
  return (
    <footer className="bg-light py-6 dark:bg-dark dark:text-white">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Richardnak Uch. {t("footer.copyright")}</p>
        <p className="text-light dark:text-dark">Version: {packageJson.version}</p>
      </div>
    </footer>

  );
}

export default Footer