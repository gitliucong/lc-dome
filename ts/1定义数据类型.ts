// 定义number类型

/* number */
// 十进制
let decLiteral:number = 6
// 十六进制
let hexListeral:number = 0xf00d
// ES6中的二进制
let binaryLiteral:number = 0b1010
// ES6的八进制表示法
let octalLiteral:number = 0o744

let notANumber:number =NaN
/* 无穷大 */
let infinityNumber:number = Infinity
// 当定义玩为数字类型的数据的时候，在定义为str
let number = 1
// Error:不能讲"string"类型复制给"number"
// num = "2222"

// 定义布尔值
let isDine:boolean = false
// 编译通过tsc xxx
// 后面约定，未强调输详细词的代码片段，默认为编译通过

// 定义字符串类型
let myName:string = '杨玉环'
let myAge:number = 12
// 造句
let sentence = `My name is${myName},My age is ${myAge}`
document.body.innerHTML = sentence

// 定义数组Array
/* number[]  , string[] */
// let list:number[]=[1,2,3,4]
// let listString:string[] = ['1','2']

// 不能将类型“string”分配给类型“number”
// let list1:number[] = [1,21,24,'2']

// 第二种定义数组
/*
数组
number[]
string[]
Array<number>
*/
let list:number[] = [1,2,3]
list.push(6)
let listString:string[] = ['1','2','3']
listString.unshift('9')
let arrayList:Array<number> = [1,2,3]
let stringList:Array<string> = ['1','2','3']
// 不能将类型“string”分配给类型“number”
// let arrayList1:Array<number> = [1,2,'3']

/* 3.5 undefined 和 null类型 */
let u:undefined = undefined
let n:null = null

/* 对象（object） */
declare function create(o:object | null):void
create ({props:0})
create (null)
// 类型“number”的参数不能赋给类型“object”的参数
// create(3222)
// 类型“string”的参数不能赋给类型“object”的参数
// create('addd')
// 类型“undefined”的参数不能赋给类型“object | null”的参数
// create(undefined)

let obj:{name:string}
obj = {name:'小李'}

/* 元组 */
// 定义一个具有 string number的元组
let tom :[string,number] = ['tom',25]

// 当赋值或访问一个已知的索引的元素是，会得到正确的类型
let tomm :[string ,number];
tom[0] = 'tom';
tom[1] = 25;

tom[0].slice(1);
tom[1].toFixed(2);


/* void类型 */
function alertName():void{
    console.log('My name is void');
}
/* 如果有返回值，那么就要根据返回值进行定义，就不能定义成为viod */
function alertNames():string{
    console.log('My name is void');
    return 'My name is string'
}

// never 类型
// 返回never 的函数必须存在无法达到的终点
function error (message:string):never{
    throw new Error(message)
}

// 推断的返回值类型为never
function fail(){
    return error ("Something failed")
}

// 扩展阅读
// 1.交叉阅读
interface use{
    name:string,
    age:number
}
interface per{
    sex:number
}
type allInfo = use & per
let persion: allInfo = {name: "xxx",age: 1,sex: 1}
// 联合类型
let allType: number | string
allType = 1
allType = 'eddd'
// 不能将类型“boolean”分配给类型“string | number”
// allType = false

// 类型断言
// 1.尖括号语法
let someValue:any;
someValue = 123;
someValue = 'addd';
let someValueLength = (<string>someValue).length

// 2.as写法
let someName:any
someName = 123
someName = '123'
let someNameLength = (someName as string).length


export {}