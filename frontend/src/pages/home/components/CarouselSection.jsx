import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react'

const CarouselSection = () => {
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const slides = [
        {
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          title: "Delicious Meals",
          description: "Explore our variety of dishes"
        },
        {
          image: "https://images.unsplash.com/photo-1493770348161-369560ae357d",
          title: "Fresh Ingredients",
          description: "Quality you can taste"
        },
        {
          image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
          title: "Special Offers",
          description: "Save big on your favorites"
        },
        {
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
          title: "Gourmet Pizza",
          description: "Handcrafted with love"
        },
        {
          image: "https://images.unsplash.com/photo-1557499305-87bd9049ec2d",
          title: "Fresh Salads",
          description: "Healthy and delicious options"
        },
        {
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
          title: "Dessert Selection",
          description: "Sweet treats to end your meal"
        }
      ];
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
      }, []);
  return (
    <div className="relative overflow-hidden py-8 md:py-16 bg-orange-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb:8 md:mb-12 text-gray-800">
        Featured Dishes
      </h2>
      <div className="relative">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-[250px] md:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-base md:text-lg">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 md:p-2 rounded-full shadow-lg hover:bg-white transition hidden md:block"
          >
          <ChevronLeft className="w-4 h-4 md:h-6 text-gray-800" />
        </button>
        
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 md:p-2 rounded-full shadow-lg hover:bg-white transition hidden md:block"
          >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default CarouselSection
