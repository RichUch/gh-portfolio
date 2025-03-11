import { useTranslation } from 'react-i18next';

export const useCustomTranslation = () => {
  const { t } = useTranslation();
  return { t };
};
