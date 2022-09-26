/* 定义字符串类型 */
let apple:string = '苹果'

/* 不能将类型“number”分配给类型“string”。 */
// let apples:string = 1

/* 定义数字类型 */
let one:number = 1

/* 不能将类型“string”分配给类型“number” */
// let one1:number = "1"

/* 定义数组 */
let array:number[] = [1,2,3,4]
let array1:number[] = [1,2,3,4]
let array2:number[] = [1,2,3,4]
let array3:Array<number> = [1,2,3,4]
let array4:Array<number> = [1,2,3,4]
let array5:Array<number> = [1,2,3,4]
/* 定义对象 */



// 返回never的函数必须存在无法到达的终点
function error1(message:string):never{
    throw new Error(message)
}

// 推断返回值类型为never
function fail1(){
    return Error('something failed')
}

// 枚举
enum Color{
    Red = 1,
    Blue = 2,
    Green = 3
}
let c:Color = Color.Green
console.log(c);

// 联合类型
let allType:number | string
allType = 1;
allType = 'eddd'
// 不能将类型“boolean”分配给类型“string | number
// allType = false

// 数字枚举
// 枚举
// 递增方式新增引索
enum Status{
    Uploading,
    Success,
    Falied
}
console.log(Status.Uploading);
console.log(Status['Success']);
console.log(Status.Falied);

// 字符串枚举
const getValue = ()=>{
    return 0
}
const names = '小明'
enum Message {
    Error = 'error message',
    SuccessError =200,
    // ChientError = names
}
console.log(Message.SuccessError,'SuccessError');




enum Animal{
    Dog = 1,
    Cat = 2
}
interface Dog{
    type:Animal.Dog
}
interface Cat{
    type:Animal.Cat
}
/* let cat1:Cat={
    //不能将类型“Animal.Dog”分配给类型“Animal.Cat”
    type:Animal.Dog
} */
let dog:Dog={
    //不能将类型“Animal.Dog”分配给类型“Animal.Cat”
    type:Animal.Dog
}


// 联合枚举
/*
联合数据类型
多种数据类型全部联合起来
*/

/* 定义一个枚举的状态 */
enum Keys{
    Off,
    On
}

/*
申明一个接口类型
表明：状态只能是开和关

*/
interface Light {
    status:Keys
}
let Light4:Light = {
    status:Keys.Off
}


interface Info {
    firstName:string;
    lastName:string;
}
const getFullName = ({firstName,lastName}:Info)=>
`${firstName} ${lastName}`


export {}