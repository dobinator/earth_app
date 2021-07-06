import React from "react";


function Nav() {

  return (
    // left side
   <div className="bg-blue-700  p-4 flex justify-between items-center">
     
     <div className="flex items-center">
     <img 
      src="/images/icon.png"
      width= "50"
      alt="graphic of building with telescope"
      className="mr-2"></img>
      <a href= "#" className="inline-block p-2 text-blue-100 hover:text-blue-50 mr-2">Home</a>
      <a href= "#" className="inline-block p-2 text-blue-100 hover:text-blue-50">Search</a>
      </div>  
    
    {/* <div className="hidden md:block"> */}
    <div>
      <a href= "#"
      className= "inline-block p-2 text-blue-100 mr-2">Login</a>
      <a href= "#"
      className= "inline-block p-2 px-4 text-indigo-100 bk-indigo-500 hover: bg-indigo 400 hover:text- indigo 50 rounded">Sign up</a>
    </div>


   </div>

  )
};


export default Nav;
