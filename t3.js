//write a function to reverse a string
let str="Pakistan";
function reverse(strn){
let ans="";
console.log(strn.length);
for(let i=strn.length-1;i>=0;i--){
//console.log(str[i]);
    ans+=strn[i];
}
return ans;
}
console.log(reverse(str));