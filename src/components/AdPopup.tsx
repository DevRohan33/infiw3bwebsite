import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import AdSense from "./AdSense";

const AdPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Hide popup immediately on route change to reset state
    setIsVisible(false);

    // Show popup after a short delay on every route change
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      <div className="relative bg-white/10 backdrop-blur-xl p-[2px] rounded-xl shadow-2xl border border-white/20">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center bg-white/90 text-gray-800 hover:text-black rounded-full shadow-xl border border-white/30 z-20 transition-all hover:scale-110 active:scale-95"
          aria-label="Close ad"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ad Container - Strict 500x500 */}
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] overflow-hidden bg-white/5 rounded-lg flex items-center justify-center">
          <AdSense 
            adSlot="6591225708" 
            width="500px"
            height="500px"
            className="w-full h-full"
          />
        </div>
        
        <div className="absolute -bottom-6 left-0 right-0 text-[10px] text-center text-white/60 uppercase tracking-widest font-bold">
          Sponsored advertisement
        </div>
      </div>
    </div>
  );
};

export default AdPopup;
