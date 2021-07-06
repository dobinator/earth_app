import React from "react";


function Hero(){
return (
    <div className="md:flex justify-between py-20 px-10 text-blue-100" style ={{backgroundColor: "#a1caf1"}}>
        <div className= "md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-2xl md:text-4xl lg:text-6xl mb-6"style= {{color: "#002387"}}>Welcome to Earth </h2>
            <p className= "mb-6">Time to learn about our wonderful planet</p>
            <a href="#" className="inline-block py-3 px-6 text-lg bg-rey-400 text-grey-800 rounded mr-2">Learn More</a>
            <a href="#"className="inline-block py-3 px-6 text-lg bg-rey-400 text-grey-800 rounded mr-2">Get Started</a>
     </div>
<div className="md:w-1/2">
 <img src="/images/hero.jpg" className= "w-full rounded-2x1"></img>


</div>
    </div>

)

}




export default Hero; 