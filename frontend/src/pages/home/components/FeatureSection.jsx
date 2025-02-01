const FeatureSection = () => {
  return (
    <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose YumRush?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="text-orange-500 text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Hot food delivered to your doorstep in minutes</p>
        </div>
        <div className="text-center p-6">
          <div className="text-orange-500 text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-bold mb-2">Quality Food</h3>
          <p className="text-gray-600">Made with fresh ingredients and love</p>
        </div>
        <div className="text-center p-6">
          <div className="text-orange-500 text-4xl mb-4">💫</div>
          <h3 className="text-xl font-bold mb-2">Best Prices</h3>
          <p className="text-gray-600">Affordable meals without compromising quality</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeatureSection
