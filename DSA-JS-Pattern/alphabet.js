function init(a) {
    let b = [ ];
        if(a < 10){
         code = 65;
         for(let i=0; i<a; i++){
           b.push(String.fromCharCode(code++));
           console.log(b.join(""));
         }
        } else if(a>10){
           code = 90;
           result = []
           for(let i=a; i>=0; i--){
             b.push(String.fromCharCode(code--));
             result.unshift(b.join(' '));
             
           }
           console.log(result.join("\n"));
        } 
    }
    init(9);

    //Output
// Z Y X W V U T S R Q P O
// Z Y X W V U T S R Q P
// Z Y X W V U T S R Q
// Z Y X W V U T S R
// Z Y X W V U T S
// Z Y X W V U T
// Z Y X W V U
// Z Y X W V
// Z Y X W
// Z Y X
// Z Y
// Z