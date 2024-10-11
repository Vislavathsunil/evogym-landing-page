import { useState, useEffect } from "react";

// Custom hook to detect media query matches
const useMediaQuery = (query: string) => {
  // State to store whether the media query matches
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object using the provided query
    const media = window.matchMedia(query);

    // Check if the current matches state is different from the media query's matches
    if (media.matches !== matches) {
      setMatches(media.matches); // Update the state if they differ
    }

    // Listener function to update the matches state on resize
    const listener = () => setMatches(media.matches);

    // Add event listener for resize events
    window.addEventListener("resize", listener);

    // Cleanup function to remove the event listener on component unmount
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]); // Dependencies: matches and query

  return matches; // Return the current matches state
};

export default useMediaQuery;
