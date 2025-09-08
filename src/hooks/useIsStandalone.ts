import { useEffect, useState } from "react";
export default function useIsStandalone(): boolean {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const check = () => {
      const mm =
        typeof window !== "undefined" && window.matchMedia
          ? window.matchMedia("(display-mode: standalone)").matches
          : false;
      type NavigatorWithStandalone = Navigator & { standalone?: boolean };
      const ios =
        typeof window.navigator !== "undefined" &&
        (window.navigator as NavigatorWithStandalone).standalone === true;
      const qs =
        typeof window !== "undefined" &&
        window.location.search.includes("standalone=1");

      const result = Boolean(mm || ios || qs);
      setIsStandalone(result);

      // also add a body class for CSS-only rules (optional)
      if (result) document.body.classList.add("is-standalone");
      else document.body.classList.remove("is-standalone");
    };

    check();

    // listen to display-mode changes (some browsers fire this)
    let mq: MediaQueryList | null = null;
    if (typeof window !== "undefined" && window.matchMedia) {
      mq = window.matchMedia("(display-mode: standalone)");
      // older browsers used addListener
      if (typeof mq.addEventListener === "function") {
        mq.addEventListener("change", check);
      } else if (typeof (mq as MediaQueryList).addListener === "function") {
        (mq as MediaQueryList).addListener(check);
      }
    }

    return () => {
      if (mq) {
        if (typeof mq.removeEventListener === "function") {
          mq.removeEventListener("change", check);
        } else if (
          typeof (mq as MediaQueryList).removeListener === "function"
        ) {
          (mq as MediaQueryList).removeListener(check);
        }
      }
    };
  }, []);

  return isStandalone;
}
