//find index of a number in array
let nums=[4,5,6,1,2,9,6,3,2];
let search =2;
function findInd(nums,search){
for(let i=0;i<nums.length;i++){
if(nums[i]==search)
    return i;
}
}
console.log(findInd(nums,2));