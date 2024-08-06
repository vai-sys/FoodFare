import React from 'react';
import { FaLinkedin, FaGithub, FaUtensils } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-br bg-white  min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <FaUtensils className="text-4xl text-orange-500 mr-3" />
              <h1 className="text-4xl font-bold text-gray-800">FoodFare</h1>
            </div>
            
            <p className="text-gray-600 text-center mb-8">
              Discover, share, and savor delicious recipes from around the world.
            </p>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">About the Creator</h2>
              <p className="text-gray-600 mb-6 text-center">
                Hello! I'm Vaishnavi, the passionate food enthusiast behind FoodFare. 
                With a love for cooking and a background in web development, 
                I've created this platform to share my culinary adventures and connect with fellow food lovers.
              </p>

              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/vaishnavi-thorat05/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://github.com/vai-sys" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>&copy; 2024 FoodFare. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default About;