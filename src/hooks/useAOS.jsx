import { useEffect } from "react";
import AOS from "aos";

export default function useAOS() {
  useEffect(() => {
    // Refresh AOS when component mounts (safe for lazy components)
    AOS.refresh();
  }, []);
}
