/*



// 这段代码为纯JavaScript代码，请在JavaScript开发环境下编写下面代码，在typeScript环境会报一些类型错误
const getFullName = ({firstName,lastName})=>{
    return `${firstName}${lastName}`
}
getFullName({
    firstName:"Lison",
    lastName:"Li"
})
// 没有问题，我门得到了拼接后的完整名字，但是使用这个函数的人如果传入一些不是很理想的参数时，就会导致各种结果
getFullName(); //Uncaught TypeError:Cannot destructure property 'a'of'undefined'or'rull'
getFullName({age:18,phore:"213213"});//'undefined undefined'
getFullName({ firstName:"Lison"})//'Lison undefined'

// 这些都是我们不想要的，在开发时难免会传入错误的参数，所以下ypeScript能够帮我们在编译阶段就检到这些错误。我们来完善下这个函数的定义：
const getFullName = ({
    firstName,
    lastName,
}:{
firstName:string;
lastName:string;
})=>{
    return `${firstName}${lastName}`
}

getFullName();//应有1个参数，但获得0个
getFullName({age:18,phore:123465798})//类型"{age:number;phone:number}"的参数不能赋给类型"{firstName:string;lastName:string}"的参数
getFullName({firstName:"Lison"})//缺少必要属性lastName

// 这些都是在我们编写代码的时候Typ©Sct提示给我们的错误信息，这样就避免了在使用函数的时候传入不正确的参数，接下来我们用这节课要讲的接口来书写上面的规则，我们使用interface来定义接口：
interface Info{
    firstName:string;
    lastName:string;
}
const getFullName = ({firstName,lastName}:Info)=>
`${firstName}${lastName}`


// 注意在定义接口的时候，你不要把它理解为是在定义一个对象，而要理解为括号包裹的是一个代码块，里面是一流弹声明语句儿，只个过声明的不是变量的值而是类型。声明也不用等号赋值，而是冒号指定类型。每条声明之前用换行分隔即可，或者也可以使用分号威者通号，都是可以的。



interface Vegetables{
    color?:string;
    type:string;
}
const getVegetables = ({color,type}:Vegetables)=>{
    return `A${color?color + "" : ""}${type}`
}
getVegetables({
    type:"tomato",
    size:12,
    price:1.2
}as Vegetables) */