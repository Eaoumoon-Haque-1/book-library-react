import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center bg-gradient-to-br from-gray-900 via-[#111827] to-black border border-cyan-500/20 rounded-3xl px-10 py-16 shadow-2xl">
        <p className="text-cyan-400 text-lg font-semibold tracking-[0.3em] mb-4">
          404 ERROR
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Page Not Found
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          The page you are looking for does not exist, was moved, or is
          unavailable right now.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link to={'/'}>
            <button className="px-6 py-3 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition">
              Browse Books
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
