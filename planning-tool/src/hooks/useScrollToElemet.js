import {useEffect} from "react";

const useScrollToElement = (element) => {
   useEffect(() => {
      const scrollPositition = element.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, scrollPositition);
   }, [element]);
}

export default useScrollToElement;