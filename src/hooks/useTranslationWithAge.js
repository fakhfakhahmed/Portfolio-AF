import { useTranslation } from 'react-i18next';
import { getAhmedAge } from '../utils/ageCalculator';

/**
 * Custom hook that provides translations with dynamic age replacement
 * @returns {object} Translation function with age replacement and i18n instance
 */
export const useTranslationWithAge = () => {
  const { t, i18n } = useTranslation();
  const currentAge = getAhmedAge();

  /**
   * Translation function that replaces {{age}} placeholder with current age
   * @param {string} key - Translation key
   * @param {object} options - Additional interpolation options
   * @returns {string} Translated text with age interpolation
   */
  const tWithAge = (key, options = {}) => {
    const translation = t(key, {
      age: currentAge,
      ...options
    });
    return translation;
  };

  return {
    t: tWithAge,
    i18n,
    currentAge
  };
};
