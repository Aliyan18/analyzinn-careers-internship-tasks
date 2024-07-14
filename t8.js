//sum of even numbers
let nums=[4,5,6,1,2,9,6,3,2];
function summ(nums){
    let sum=0;
    nums.forEach(element => {
        if(element%2==0)
            sum+=element;
    });
    return sum;
}
console.log((summ(nums)));