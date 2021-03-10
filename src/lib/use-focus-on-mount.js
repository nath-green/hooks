import { useRef, useEffect } from "react";

export function useFocusOnMount() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.focus();
    }
  }, []);

  return ref;
}
