import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adClient?: string;
  className?: string;
  width?: string;
  height?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
}

const AdSense = ({ 
  adSlot, 
  adClient = 'ca-pub-8602831345164271', 
  className = '',
  width,
  height,
  format = 'auto'
}: AdSenseProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  // For fixed size ads, we use explicit styles and remove responsive data attributes
  const isFixed = width && height;

  return (
    <div className={`adsense-container overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: width || '100%',
          height: height || 'auto'
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        {...(!isFixed ? { 
          'data-ad-format': format,
          'data-full-width-responsive': 'true' 
        } : {})}
      />
    </div>
  );
};

export default AdSense;
