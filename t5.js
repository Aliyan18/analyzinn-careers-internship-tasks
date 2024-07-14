//sort an array of numbers in ascending order
let nums=[4,5,6,1,7,9,6,3,2];
let flag=false;
let n=nums.length-1;
while(!flag && n>0){
let flag= true;
for(let i=0;i<n;i++){
    if(nums[i]>nums[i+1]){
        let temp=nums[i];
        nums[i]=nums[i+1];
        nums[i+1]=temp;
        flag=false;
    }
        
}
n--;

}
console.log(nums);