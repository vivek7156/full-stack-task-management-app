import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
        <div className="relative h-[60vh] md:h-[80vh] bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leaping-tight">Welcome to YumRush</h1>
          <p className="text-xl md:text-xl mb-8 max-w-2xl">Delicious food delivered to your doorstep</p>
          <Link 
            to="/menu" 
            className="bg-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-orange-600 transition duration-300 text-sm md:text-base"
          >
            Order Now
          </Link>
        </div>
      </div>
  )
}

export default HeroSection
