import { useRef, useState } from 'react';

export const useAlert = () => {
  const [show, setShow] = useState('');

  const timerId: any = useRef(null);

  function showAlert(message: string) {
    if (show) {
      setShow(message);
      clearInterval(timerId.current);
      timerId.current = setTimeout(() => {
        setShow('');
      }, 2000);
      return;
    }

    setShow(message);
    timerId.current = setTimeout(() => {
      setShow('');
    }, 2000);
  }

  return { show, showAlert};
};