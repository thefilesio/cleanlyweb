import { useEffect } from 'react';

export const useCookiebot = (shouldLoad: boolean) => {
  useEffect(() => {
    if (!shouldLoad) return;

    // Check if Cookiebot is already loaded
    if (window.cookiebot) return;

    // Create and load the Cookiebot script
    const script = document.createElement('script');
    script.id = 'Cookiebot';
    script.src = 'https://consent.cookiebot.com/uc.js';
    script.setAttribute('data-cbid', '31e0e553-7177-4404-804d-0434fa80b133');
    script.setAttribute('data-blockingmode', 'auto');
    script.type = 'text/javascript';
    
    // Add script to head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('Cookiebot');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [shouldLoad]);
};
