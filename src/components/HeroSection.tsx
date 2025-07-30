import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import cleanlyLogo from "@/assets/cleanly-logo.png";
import { useState, useEffect } from "react";

// Star SVG Component
const StarIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 1532.72 1532.72" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M766.36,0C685.74,620.38,620.38,685.74,0,766.36c620.38,80.62,685.74,145.97,766.36,766.36,80.62-620.38,145.97-685.74,766.36-766.36C912.33,685.74,846.98,620.38,766.36,0Z"/>
    </g>
  </svg>
);

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Start video animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 3 seconds for video animation

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleVideoError = (e: any) => {
    console.error('Video error:', e);
    // Fallback: Skip video and show content immediately
    setShowContent(true);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Video background animation */}
      <div className={`absolute inset-0 video-container transition-opacity duration-1000 ${showContent ? 'opacity-0' : 'opacity-100'}`}>
        <video
          autoPlay
          muted
          onEnded={handleVideoEnd}
          onError={handleVideoError}
          className="w-full h-full object-cover"
          style={{ 
            filter: 'brightness(1.2) contrast(1.2) hue-rotate(30deg) saturate(0.6)'
          }}
        >
          <source src="/bubbles.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Foam bubbles animation - only during video */}
      {!showContent && (
        <div className="absolute inset-0 foam-container">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      )}
      
      {/* Background sparkles - enhanced after cleaning */}
      <div className="absolute inset-0 sparkles-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute sparkle ${showContent ? 'sparkle-enhanced' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <StarIcon className="sparkle-icon" />
          </div>
        ))}
      </div>

      {/* Fixed stars above the heading */}
      <div className="absolute fixed-stars-container">
        <div className="fixed-star star-1">
          <StarIcon className="sparkle-icon" />
        </div>
        <div className="fixed-star star-2">
          <StarIcon className="sparkle-icon" />
        </div>
        <div className="fixed-star star-3">
          <StarIcon className="sparkle-icon" />
        </div>
      </div>

      <div className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={cleanlyLogo} 
              alt="Cleanly Logo" 
              className="h-20 mx-auto mb-4 hover-lift"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-clean-text mb-6 leading-tight">
            Sauberkeit auf die{" "}
            <span className="text-clean-green">professionelle</span> Art.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-clean-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            Ihr persönlicher Reinigungsservice von{" "}
            <span className="font-semibold text-clean-green">Cleanly</span>
            {" "}– fair, zuverlässig, gründlich.
          </p>

          {/* CTA Button */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center sm:items-center">
            <Button 
              variant="cleanly" 
              size="xl" 
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              Jetzt kostenlos anfragen
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="cleanlyOutline" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-clean-green" />
      </div>
    </section>
  );
};

export default HeroSection;