import { useEffect } from "react";
/*
    We imported the React useEffect Hook in the code and placed the side effects inside it. 
    The useEffect Hook takes a function as an argument and an optional array of dependencies that define when to re-run the effect.
    Naturally, the effect runs after every completed render. 
    That is, on the first component render and after it detects a state or prop changes in the dependency array. 
    If we leave the dependency array empty, React will skip any form of re-rendering and only execute the effects once.
*/
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