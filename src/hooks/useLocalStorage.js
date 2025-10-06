import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue, initializer) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsedItem = JSON.parse(item);
        return initializer ? initializer(parsedItem) : parsedItem;
      }
      const initVal = typeof initialValue === 'function' ? initialValue() : initialValue;
      return initializer ? initializer(initVal) : initVal;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      const initVal = typeof initialValue === 'function' ? initialValue() : initialValue;
      return initializer ? initializer(initVal) : initVal;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};