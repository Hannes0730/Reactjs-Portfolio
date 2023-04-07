import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollToTopArrow() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the scroll-to-top arrow when the user has scrolled down the page
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener to show/hide the arrow based on the user's scroll position
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page when the arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <FaArrowCircleUp
          onClick={scrollToTop}
          className="text-gray-500 hover:text-gray-200 cursor-pointer text-4xl"
        />
      )}
    </div>
  );
}

export default ScrollToTopArrow;
