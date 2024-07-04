var str = 'geeksforgeeks';
var strlen = str.length;
var parta = '';
var partb = '';
 
for(var i=0 ; i<Math.ceil(strlen/2) ; i++){
    parta+=str[i];
    console.log(parta)
}
 
for(var i=Math.ceil(strlen/2) ; i<strlen ; i++)
{
    partb+=str[i];
}
 
var new_part_a = parta.toUpperCase();
 
var changed_string = new_part_a + partb;
 
console.log(changed_string);
