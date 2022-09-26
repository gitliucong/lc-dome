// const getFullName = ({firstName,lastName}:{firstName:string,lastName:string})=>{
//     return `${lastName}${firstName}`
// }
// const result = getFullName({firstName:1,lastName:'李'})
// console.log(result);
var getVegetables = function (_a) {
    var color = _a.color, type = _a.type;
    return "A".concat(color ? color + "" : "").concat(type);
};
getVegetables({
    type: "tomato",
    size: 12,
    price: 1.2
});
