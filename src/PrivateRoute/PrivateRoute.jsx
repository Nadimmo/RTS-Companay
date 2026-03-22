import React, { useState } from 'react';

const PrivateRoute = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const CORRECT_PASSWORD = "1969120"; // Change this to your desired password

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Restricted Access</h2>
            <p className="text-gray-500 mt-2">Enter your password to unlock this page</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
                  error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium animate-pulse">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md active:transform active:scale-95"
            >
              Unlock Now
            </button>
          </form>

          <p className="text-center text-xs text-gray-400">
            Protected Content &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;