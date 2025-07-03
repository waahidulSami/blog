import React from "react";

export default function Button({
  children,

 

 
}) {
  return (

 <button className="btn-primary w-full h-8 rounded-xl
  text-white font-semibold text-base
   mb-2 hover:shadow-2xl hover:shadow-blue-500/25 transform
    hover:scale-[1.02] hover:-translate-y-1
     active:scale-[0.98] transition-all
      duration-300 ease-out relative overflow-hidden group">
              <span className="relative z-10">{children}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
              
    
  );
}