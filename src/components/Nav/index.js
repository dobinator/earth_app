import React from "react";


function Nav() {

  return (
    // left side
   <div className="bg-bg-blue-300 p-4 flex justify-between items-center">
     
     <div className="flex items-center">
     <img 
      src= "./images/icons.png"
      width= "50"
      alt="graphic of building with telescope"
      className="mr-2"></img>
      <a href= "#" className="inline-block p-2 text-blue-600 hover:text-blue-200 mr-2">Home</a>
      <a href= "#" className="inline-block p-2 text-blue-600 hover:text-blue-200">Search</a>
      </div>  
    
    {/* <div className="hidden md:block"> */}
    <div>
      <a href= "#"
      className= "inline-block p-2 text-blue-600 mr-2">Login</a>
      <a href= "#"
      className= "inline-block p-2 px-4 text-yellow-600 bk-yellow-400 hover: bg-indigo 600 hover:text- indigo 50 rounded">Sign up</a>
    </div>


   </div>

  )
};


export default Nav;
