import { useRef } from 'react';

export function useFocus() {
  const ref = useRef(null);

  return { ref, setFocus: () => ref.current.focus() };
}
