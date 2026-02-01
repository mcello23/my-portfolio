import { useEffect } from 'react';

/**
 * useKeyPress
 * @param {string} key - the key to press
 * @param {function} action - the action to perform
 * @see https://usehooks.com/useKeyPress/
 */
export default function useKeyPress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [key, action]);
}
