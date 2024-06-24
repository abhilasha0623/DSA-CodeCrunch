console.log(mul(2)(3)(4)) //2

function mul(a){
    return(b)=>{
        return(c)=>{
            return a*b*c;
        }
    }
}