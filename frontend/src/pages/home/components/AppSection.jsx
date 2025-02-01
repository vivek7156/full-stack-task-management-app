const AppSection = () => {
  return (
    <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Download Our App</h2>
          <p className="text-gray-600 mb-6">
            Get the best food delivery experience with our mobile app. 
            Available for iOS and Android devices.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <span className="mr-2">🍎</span> App Store
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <span className="mr-2">🤖</span> Play Store
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3" 
            alt="Mobile App" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AppSection
