import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroMedicalCenter from "@/assets/hero-medical-center.jpg";
import heroHealthcare from "@/assets/hero-healthcare.jpg";
import heroConsultation from "@/assets/hero-consultation.jpg";

const slides = [
  {
    image: heroMedicalCenter,
    title: "Your Health, Our Priority",
    subtitle: "Comprehensive healthcare services with compassionate care",
    cta: "Book Appointment"
  },
  {
    image: heroHealthcare,
    title: "Expert Medical Care",
    subtitle: "State-of-the-art facilities and experienced healthcare professionals",
    cta: "Learn More"
  },
  {
    image: heroConsultation,
    title: "Personalized Treatment",
    subtitle: "Tailored healthcare solutions for your unique needs",
    cta: "Our Services"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Respect user's motion preferences
  const prefersReducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (prefersReducedMotion) return; // Do not auto-advance
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative h-screen overflow-hidden -mt-16"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured healthcare highlights"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } ${prefersReducedMotion ? "duration-0" : "duration-1000"}`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            {...(index === 0 ? { fetchpriority: "high" as const } : {})}
            className="absolute inset-0 w-full h-full object-cover select-none"
            aria-hidden="true"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/10" />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4 pt-16">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="medical" size="lg" asChild>
                  <Link to="/appointment">
                    {slide.cta}
                  </Link>
                </Button>
                <Button variant="medical-outline" size="lg" asChild>
                  <Link to="/services">
                    Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2" aria-label="Slide indicators" role="tablist">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentSlide}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;