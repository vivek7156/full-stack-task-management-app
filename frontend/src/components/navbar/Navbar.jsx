import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {
  const { token, setToken, username } = useContext(StoreContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="p-4 flex justify-between items-center rounded-b-xl">
      <div className="text-orange-500 text-3xl font-bold select-none focus-outline-none">
        <Link to="/">YumRush</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/order" className="text-orange-500">
          <ShoppingCart />
        </Link>
        {token ? (
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-orange-500 p-2 rounded-full hover:bg-orange-50 transition-colors"
            >
              <User className="w-6 h-6" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <div className="block px-4 py-2 text-gray-800 hover:bg-orange-50">
                  Signed in as <span className="font-medium">{username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-white bg-orange-500 p-2 rounded-md hover:bg-orange-600 transition-colors">
            <Link to="/login" className="text-white">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;