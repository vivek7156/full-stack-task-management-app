import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] md:h-[80vh] bg-gradient-to-r from-orange-400 to-orange-600">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-white px-4 text-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 leaping-tight">Welcome to YumRush</h1>
          <p className="text-xl md:text-xl mb-8 max-w-2xl">Delicious food delivered to your doorstep</p>
          <Link 
            to="/menu" 
            className="bg-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-orange-600 transition duration-300 text-sm md:text-base"
          >
            Order Now
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 rounded-md overflow-hidden shadow-lg h-[40vh] md:h-[50vh] w-full">
          <Spline scene="https://prod.spline.design/VwT-XxCosiHfONxx/scene.splinecode" style={{ pointerEvents: 'none' }} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
