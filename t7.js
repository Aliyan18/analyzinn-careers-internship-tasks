//factorial
let n=20;
function fact(n){
    let ans=n;
for(let i=n-1;i>0;i--)
ans*=i;
return ans;
}
console.log(fact(n));