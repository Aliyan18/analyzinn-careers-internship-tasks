//create array of string and print longest string
const strings=[
    "Pakistan", "USA","Canada","india"
]

const longest=(str)=>{
let max=0; 
let ans;  
for(const element of str){
    let count=0;
   for(const el of element){
        count++;
    };
if(max<count){
    max=count;
ans=element;
}
};
return ans;
}
console.log(longest(strings));