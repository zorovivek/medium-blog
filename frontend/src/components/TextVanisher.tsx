import { useEffect, useState } from "react";

function TextVanisher() {
  const [opacity, setOpacity] = useState(0); // Fixed typo in variable name

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setOpacity((prevOpacity) => {
          const newOpacity = prevOpacity + 0.5; // Increment by 0.1
          if (newOpacity >= 1) {
            clearInterval(interval); // Stop the interval when opacity reaches 1
            return 1;
          }
          return newOpacity;
        });
      }, 500);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }, 1000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="text-2xl font-semibold text-white transition-all" style={{ opacity:opacity }} >
      Want to know about the current world? Come join us 
    </div>
  );
}

export default TextVanisher;