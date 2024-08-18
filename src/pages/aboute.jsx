import React from 'react';
import { useSelector } from 'react-redux'; // Assuming you use Redux for user state
import { Link } from 'react-router-dom';

const About = () => {
  
  const user = useSelector((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">About My-Store</h1>
          <p className="text-lg">
            Welcome to My-Store! We are committed to providing the best products and services to our customers. Our store offers a wide range of products to suit all your needs, with a focus on quality and customer satisfaction.
          </p>
        </header>

        <section className="flex justify-center items-center">
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-500">
                <img
                  src={user.photoURL}
                  alt={user ? user.displayName : 'Default User'}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{user ? user.displayName : 'Guest'}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {user ? `Email: ${user.displayName}` : 'Please log in to see more details.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center mt-8">
          <Link to="/" className="text-blue-500 dark:text-blue-400 hover:underline">Back to Home</Link>
        </footer>
      </div>
    </div>
  );
};

export default About;
