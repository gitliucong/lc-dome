// const getFullName = ({firstName,lastName}:{firstName:string,lastName:string})=>{
//     return `${lastName}${firstName}`
// }
// const result = getFullName({firstName:1,lastName:'李'})
// console.log(result);






interface Vegetables {
    color?:string;
    type:string;
}
const getVegetables = ({color,type}:Vegetables)=>{
    return `A${color? color+"":""}${type}`;
}
getVegetables({
    type:"tomato",
    size:12,
    price:1.2
}as Vegetables)


