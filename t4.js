//check for palindrome
let str="bbbab";
function reverse(strn){
    let ans="";
    for(let i=strn.length-1;i>=0;i--){
    //console.log(str[i]);
        ans+=strn[i];
    }
    return ans;
    }

console.log((str==reverse(str)?"yes":"Not a palindrome"));
// prints yes if it is a palindrome