//create an array of objects and print the object with highest value
const objects=[
    {
    Fname:'Abu Bakar',
    Lname:'Saddique',
    value:10
    },
    {
    Fname:'Ali',
    Lname:'Raza',
    value:15
    },
    {
    Fname:'Usman',
    Lname:'Umer',
    value:5
    }
]
function highestVal(obj){
    let max=null;
    obj.forEach((item,inx)=>{
        if(!max||item.value>max)
            max=item.value;
    }       
); return max;
}
console.log(highestVal(objects));