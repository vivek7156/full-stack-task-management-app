import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">YumRush</h3>
          <p className="text-gray-400">Delicious food delivered to your doorstep</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/menu" className="text-gray-400 hover:text-orange-300">Menu</Link></li>
            <li><Link to="/cart" className="text-gray-400 hover:text-orange-300">Cart</Link></li>
            <li><Link to="/order" className="text-gray-400 hover:text-orange-300">Orders</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: contact@yumrush.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Food Street</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-orange-400 mt-8 pt-8 text-center text-orange-500">
        <p>&copy; 2025 YumRush. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
