import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About Our Library
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          A modern digital space where knowledge meets simplicity. Explore, read,
          and grow with thousands of books at your fingertips.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-cyan-400 mb-3">
              📚 Vast Collection
            </h2>
            <p className="text-gray-300">
              Access a wide range of books from fiction to research papers, all in one place.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-indigo-400 mb-3">
              ⚡ Fast & Smart
            </h2>
            <p className="text-gray-300">
              Lightning-fast search and smart recommendations tailored to your interests.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-purple-400 mb-3">
              🌍 Accessible Anywhere
            </h2>
            <p className="text-gray-300">
              Read anytime, anywhere — your library travels with you across all devices.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our mission is to make knowledge accessible to everyone through a seamless
            and beautiful reading experience.
          </p>

          <Link to='/'><button className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition">
            Explore Library
          </button></Link>
        </div>

      </div>
    </section>
  );
};

export default About;