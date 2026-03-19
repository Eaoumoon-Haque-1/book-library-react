import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-12 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">📚 BookVault</h2>
          <p className="mt-2 text-sm text-gray-500 max-w-sm">
            Your personal digital library. Discover, read, and organize books
            effortlessly.
          </p>
        </div>

        {/* Center: Minimal Links */}
        <div className="flex gap-6 text-sm">
          <a className="hover:text-cyan-400 transition cursor-pointer">Home</a>
          <a className="hover:text-cyan-400 transition cursor-pointer">About</a>
          <a className="hover:text-cyan-400 transition cursor-pointer">Books</a>
        </div>

        {/* Right: CTA / Quote */}
        <div className="text-sm text-center md:text-right">
          <p className="italic text-gray-500">
            “A reader lives a thousand lives.”
          </p>
          <p className="mt-2 text-xs text-gray-600">
            © {new Date().getFullYear()} BookVault
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
