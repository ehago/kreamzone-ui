import { RefObject, useEffect } from 'react';

function useOutSideClick(ref: RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const handleClick = (evt: any) => {
      if (ref.current && !ref.current.contains(evt.target)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
}

export default useOutSideClick;
