import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(key, initialValue)

  useEffect(() => {
    isDarkMode ? document.querySelector('body').classList.add("dark-mode") : document.querySelector('body').classList.remove("dark-mode")
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;