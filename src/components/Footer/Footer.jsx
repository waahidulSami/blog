import React from 'react';

const Footer = () => {
   return (
    <footer className="flex items-center justify-between border-t border-[#eaedf1] px-10 py-4 bg-gray-50 text-[#101518]">
 
  <div className="flex items-center gap-3">
    <div className="size-4">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
      </svg>
    </div>
    <p className="text-sm font-semibold">Bloggr</p>
  </div>


  <div className="hidden md:flex gap-8 text-sm font-medium">
    <a href="#" className="hover:underline">Privacy</a>
    <a href="#" className="hover:underline">Terms</a>
    <a href="#" className="hover:underline">Support</a>
  </div>


  <div className="text-sm text-right font-normal">&copy; 2025 Bloggr</div>
</footer>

  );
};

export default Footer;