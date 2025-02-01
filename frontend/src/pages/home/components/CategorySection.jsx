import { Link } from 'react-router-dom'

const CategorySection = () => {
  return (
    <div className="py-16 bg-orange-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Popular Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['Appetizers', 'Main Course', 'Desserts', 'Beverages'].map((category) => (
          <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{category}</h3>
              <p className="text-gray-600 mb-4">Explore our {category.toLowerCase()}</p>
              <Link 
                to="/menu" 
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                View Menu →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CategorySection
