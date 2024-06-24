<input type="search" placeholder="typr to search"/>

const input =document.querySelector("input");
let timeOut;
 const debounce=(callback)=>{
 clearTimeout(timeOut);
 timeOut = setTimeout(()=>callback(),1200);
 }

input.addEventListener("input",()=>{debounce(()=>{
console.log("fetching Datta")
})}
)