import { useEffect } from "react";

export const useOnClickOutside = (ref, currentState, updater) => {
    useEffect( () => {
        document.title = `Current state value: ${currentState}`;
        const handler = (event) => {
            if (currentState && ref.current && !ref.current.contains(event.target)) {
              updater();
            }
          };
          document.addEventListener("mousedown", handler);
          return () => {
            document.removeEventListener("mousedown", handler);
          };
    }, [ref, currentState, updater]);
};