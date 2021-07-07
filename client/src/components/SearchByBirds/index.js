import React from "react";


function SearchByBirds(){
return(
<div className= "bg-blue-400 text blue-100 flex justify-between">
<form>
    <input></input>
    <button>Search</button>
</form>

<form>
    <input className= "w-full rounded-l py-3 px-4 outline-none focus:bg-indigo-200"></input>
    <button className= "bg-red-300 text-red-800 rounded-r px-4">Search</button>
</form>

</div>


)

}


export default SearchByBirds; 