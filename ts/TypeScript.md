# typeScript

# 第一单元  初始TypeScript1

### 一、关于typeScript

##### 1.1typeScript简介

简介

typeScript是微软开发的一个开源的编程语言，通过在JavaScript的基础上添加静态类型定义构建而成。

typeScript编译器或Babel转译为JavaScript代码，可运行在任何浏览器，任何操作系统（eg不会有兼容性）

它是JavaScript的一个超集，typeScript在JavaScript的基础上添加了可选的静态类型和基于类的面向对象编程

产生的背景

js语言是一种动态型语言（变量类型是动态的，也就是在js中定义的变量 let a 中的a可以存在任何类型的值，若是使用一个字符串去运算eg字符串1和数字1相加...）且在编写代码的过程中编译器并不会报错，这导致后期维护十分困难，微软在js的基础上进行扩展形成了typeScript。

官网  https://www.tslang.cn/

##### 1.2typeScript的前世今生

![image-20220926105416813](C:\Users\liu'cong\AppData\Roaming\Typora\typora-user-images\image-20220926105416813.png)

##### 1.3typeScript的发展优缺点

##### 优点

###### typeScript增加了代码的可读性和可维护性

​	1.类型系统实际上是最好的文档，大部分的函数看看类型的定义就知道如何使用了

​	2.可以在编译阶段就发现大部分的错误，这总比在运行时出错好

​	3.增强了编译器和IDE的功能，包括代码补全、接口提示、跳转到定义、重构等

###### typeScript非常包容

​	1.Typescript是javascript的超集，js文件可以直接重命名为。ts即可

​	2、即使不显示的定义失型，也能够自动做出类型推导，
​	3、可以定义从简单到复杂的几乎一切类型，
​	4、兼容第三方库，即使第三方库不是用TypeScript写的，也可以编写单独的类型文件供TypeScript读取。

###### typeScript拥有活跃的社区

​	1、大部分第三方库想有提供给Typescript的类型定义文件
​	2、大型开源编程软件，和多方人员合作

###### typeScript兼容性很强

​	1、typeScriptt会在编译时期去掉数据类型和特有语法，生成纯粹的JavaScript代码。由于最终在浏览器上运行的是JavaScript语言，所以typeScript并不依赖于浏览器的支特，也并不会带来兼容问题，然后运行在浏览器、Node.js等任何能运行JavaScript的环境中。
​	2、TypeScript扩展了JavaScript的语法，所以任何现有的JavaScript程序可以运行在TypeScript环境中，因此我们可以在ts中继续写js的代码而不会报错，这意味着JavaScript项目能够新进式的迁移到TypeScript

###### typeScript拥抱最新的MCMAScript标准，与时俱进

​	1、TypeScript与标准同步发展，符合量新的ECMAScript标准(stage3)

TypeScript的编译步骤可以输出运行之前的错误

````js
let a:number = 1
let b:string = 1
let c:number = 0
c = a+b
//不能将类型“string”分配给类型“string”,运行时回报错，类型不相符
````

##### 缺点

有一定的学习成本，需要理解接口，泛型，类，枚举类型等前端工程师可能不是很熟恶的概念，
短期内会增加开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，Typescripti能够减少其维护成本
集成到构建流程需要的一些工作量，
可能和一些库结合的不是很完美

##### 1.4类型系统的介绍

###### 1.静态语言和动态语言

类型系统按照类型检查的时机来分类，可以分为动态类型和静态类型
动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript是一门解释型语言，没有编译阶段，所以它是动态类型：以下这段代码在运行时才会报错：

````js
let foo 1;
foo.split('')
//Uncaught TypeError:foo.split is not a function
//运行时会报错(fo0.sp11t不是一个函数)，造成线上bug
````

静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导数语法错误。TypeScript在运行前需要先编译为JavaScript,.而在编译阶段就会进行类型检查，所以TypeScript是静态类型：这段下ypeScript代码在编译阶段就会报错了：

````js
let foo 1;
foo.split('')
//Property 'splipt' does not exist on type 'number'
//编译时会报错（数字没有splist 方法），无法通过编译
````

###### 2.如何理解强类型和弱类型的语言

类型系统按照「是否允许隐式类型转换」来分类，可以分为强失型和弱类型
以下这段代码不管是在JavaScript中还是在TypeScript中都是可以正常运行的，运行时数字1会被隐式类型转换为字符串'1'，加号+被识别为字特串拼接，所以打印出结果是字符串"11'

`````js
console.log(1+'1')
//  打印结果   '11'
`````

TypeScript是完全兼容JavaScript的，它不会修改JavaScript运行时的特性，所以它们都是弱类型。

### 二、TS的安装和使用

##### 2.1TS的安装

###### 2.1.1有两种主要的方式来获取TypeScript工具：

​	·通过npm(Node.s包管理器)
​	安装visual Studio的TypeScript插件

###### 2.1.2npm全局安装TypeScript

````js
npm install -g typescript
````

​	以上命令会在全局环境下安装tsc命令，安装完成之后，我们就可以在任何地方执行tsc命令了

###### 检查是否成功安装：

````js
tsc -v //version 版本号证明安装成功
````

###### 2.1.3构建第一个TypeScript

​	1.创建一个ts文件

​	2.在文件内输入内容

​	3.tsc 文件名.ts

​	4.结果会输出一个相同js文件

##### 2.2 Visual Studio Code配置自动编译

###### 2.2.1自动编译配置

​	1.首先在放ts的文件夹下打开终端执行tsc-init命令会生成一个sconfig.json文件

`````js
tsc --init//在文件克下自动生成一个tsconfig.json文件
`````

​	2.点击vscode终端一>选择运行任务->输入tsc按下回车—>选择tsc:监视xxxx文件夹下的tsconfig.json文件
​	3.之后再写的ts代码就会自动转化为js

###### 2.2.2tsconfig.j5on介绍

如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScripti项日的根目录。tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项

##### 作用

文件选项配置

编译选项配置

工程引用配置

## 三、TS的数据类型

##### 3.1数字类型（number）

在js中数字类型据：Number
但是在ts中数字类型：number

###### 1.接下来我们先看一下在js中如何定义一个s数字变量

````js
//在js中定义一个变量的数据类型是通过以值的方向来定义的，也是可以重复赋值的
//首先我们要进行一个运算，计算相加
let num1 = 1
let num2 = 2
let sum = num1 + num2 //3
//非正常情况：
let num3 = 3
let num4 = 4
num3 = "3"
1et sum = num3+num4 
//此时结果是什么？就会出现问题，那么我们现在来看ts的属值
````

###### 2.使用number定义数值类型

````js
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
num = "2222"
````

###### 3.2布尔值类型（Boolean）

布尔值是最基础的数据类型，在TypeScript中，使用Boolean定义布尔值类型：

`````js
let isDine:boolean = false
// 编译通过tsc xxx
// 后面约定，未强调输详细词的代码片段，默认为编译通过
`````

###### 3.3字符串类型（string）

使用string定义字符串类型

````js
let myName:string = '杨玉环'
let myAge:number = 12
// 造句
let sentence = `My name is${myName},My age is ${myAge}`
document.body.innerHTML = sentence
````

###### 3.4数组（Array<number> || number[  ] ）

1.js中的数组定义

````js
第一种：[]
let array = []
第二种：new adday
let array = new Array()
array.push(1)
````

2.ts中两种方式定义数组

第一种，可以在元素类型后面接上[],表示由此类型组成的一个数组

````js
/* number[]  , string[] */
let list:number[]=[1,2,3,4]
let listString:string[] = ['1','2']

// 不能将类型“string”分配给类型“number”
// let list1:number[] = [1,21,24,'2']
````

第二种，使用数组泛型，Array<元素类型>

````js
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
````

###### 3.5 3.5 undefined 和 null类型

null和undefined有一些共同特点，所以我们放在一起讲。说它们有共同特点，是因为在JavaScript中，undefined和null是两个基本数据类型。在TypeScript中，这两者都有各自的类型即undefined和null,也就是说它们既是实际的值，也是类型，来看实际例子

```js
let u:undefined = undefined
let n:null = null
```

###### 3.6对象（object）

1.js中定义

`````js
第一种 {}
let object = {}
第二种 new object
let object = new onject()
第三种 使用字面量方法创建对象
let person = {name:'zhong',age:20}
第四种 工厂模式创建对象
第五种 构造函数创建对象
object 表示非原始类型，也就是除number，string，Boolean，symbol，null或undefined之外的类型
`````

2.在ts中对象的使用

使用object类型，就可以更好的表示像object.create 这样的API,例如：

````js
declare function create(o:object | null):void
create ({props:0})
create (null)
// 类型“number”的参数不能赋给类型“object”的参数
create(3222)
// 类型“string”的参数不能赋给类型“object”的参数
create('addd')
// 类型“undefined”的参数不能赋给类型“object | null”的参数
create(undefined) 

let obj:{name:string}
obj = {name:'小李'}
````

###### 3.7元组（tuple）

数组：合并了相同的对象，长度不限制

元组（tuple）：合并了不同类型的对象，已知长度

````js
// 定义一个具有 string number的元组
let tom :[string,number] = ['tom',25]
````

当赋值或访问一个已知的索引的元素是，会得到正确的类型*

```js
let tomm :[string ,number];
tom[0] = 'tom';
tom[1] = 25;

tom[0].slice(1);
tom[1].toFixed(2);
```

###### 5.8枚举（enum）

enum类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字，

###### 5.9Any（any）

JavaScript的类型是灵活的，程序有时也是多变的。有时，我们在编写代码的时候，并不能请是地知道一个值到底是什么类型，这时就需要用到any类型，即任意类型，我们来看例子：

```js
let value：any
value = 123
value = “abc”
value = false
```

你可以看到，我们定义变量vaue,指定它的类型为any,接下来照予任何类型的值都是可以的。
我们还可以在定义数组类型时使用any来指定做组中的元素类型为任意类型：

```js
const array:any[] = [1,"0" ,true]
```

但是请注意，不要滥用any,如果任何值都指定为any类型，那么TypeScript将失去它的意义
所以如果类型是未知的，更安全的做法是使用unknown类型，我们本小节后面会讲到。

###### 3.10viod类型

viod和any相反，any是表示任意类型，而viod是表示没有任意类型，就是什么类型都不是，这个在我们定义函数，函数没有返回值的时候会用到

````js
/* void类型 */
function alertName():void{
    console.log('My name is void');
}
/* 如果有返回值，那么就要根据返回值进行定义，就不能定义成为viod */
function alertNames():string{
    console.log('My name is void');
    return 'My name is string'
}
````

###### 3.11 never类型

1,never类型表示的是那些永不存在的值的类型。例如，never类型是那些总是会出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型：变量也可能是never类型，当它们被永不为真的类型保护所约束时。
2.never类型是任何类型的子类型，也可以层值给任何类型：然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外），即使any也不可以赋值给never,
3.简单来说就是用来抛错

````js
// 返回never 的函数必须存在无法达到的终点
function error (message:string):never{
    throw new Error(message)
}
// 推断的返回值类型为never
function fail(){
    return error ("Something failed")
}
````

###### 3.12unknown

unknown类型是下vpeScript在3.0版本所增的类型，它表示未知的类型，这样看来它貌似和any很像，但是还是有区别的，也就是所谓的"**unknow相对于any是安全的**”。怎么理解呢？我们知道当一个值我们不能确定它的类型的时候，可以指定它是any类型；但是当指定了any类型之后，这个值基本上是废”了，你可以随意对它进行属性方法的访问，不管有的还是没有的，可以把它当做任意类型的值来使用，这往往会产生问题，如下

````js
let value:any
console.log(value.name)
console.log(value.toFixed())
console.log(value.length)
````

上面这些语句都不会报错，因为vaue是any类型，所以后面三个操作都有合法的情况，当value是一个对象时，访问name属性是没问题的：当vaue是数值类型的时候，调用它的toFixed方法没问题：当value是字符串或数组时获取它的length属性是没问题的。

而当你指定值为unknowi类型的时候，如果没有通过基于控制流的类型断言来缩小范围的话，是不能对它进行任何操作的，关于类型断言，我们后面小节会讲到。总之这里你知道了，unknowr类型的值不是可以随便操作的

我们这里只是先来了解unknown和any的区别，unknown还有很多复杂的规则，但是涉及到很多后面才学到的知识，所以需要我们学习了高级类型之后才能再讲解。

###### 3.13扩展阅读

````js
1.交叉类型
interface use{
    name:string,
    age:number
}
interface per{
    sex:number
}
type allInfo = use & per
let persion: allInfo = {name: "xxx",age: 1,sex: 1}

2.联合类型
let allType: number | string
allType = 1
allType = 'eddd'
// 不能将类型“boolean”分配给类型“string | number”
// allType = false

3.类型断言
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

````

# 第二单元 深入学习枚举

枚举是下typeScript新增加的一种改据类型，这在其他很多语言中很常见，但是JavaScript却没有。
枚举使用enum关键字定义，TypeScript支持数字和字符串的枚举。

### 1、数字枚举

##### 1.1新增方式  新增索引

```js
/*
数字类型
1.语法使用的是es6的语法，Uploading:Uploading
2.自动清加指定常引符合
3.我们可以像访问对象一样使用”，”和口'两种方式访问里面的
*/
enum Status{
    Uploading,
    Success,
    Falied
}
console.log(Status.Uploading);
console.log(Status['Success']);
console.log(Status.Falied);
// 以上例子并没有指定索引，是默认的编号，我们也可以自己指定

```

##### 1.2*隔行添加数字类型*

````js
/*
    2.隔行添加数字类型
    下面一次添加的数据类型将按照顺延的方式进行添加索引值

    3.如果各行重新新增索引值，将会一直进行递增方式，递增索引值
*/
enum InterLeave{
    Yes = 200,
    Create,
    Accept = 800,
    BadRequest
}

console.log(InterLeave['Yes']) //200
console.log(InterLeave.Create) //201
console.log(InterLeave.Accept) //800
console.log(InterLeave.BadRequest) //801
````

总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来

这样的好处：减少代码中魔法数字的出现，便于后续维护代码

##### 1.3使用常量和计算值

数字枚举在定义值的时候，可以使用计算值和常量，但是要注意，如果某个字段使用了计算值或常量，**那么该字段后面紧接着的字段必须设置初始值**，这里就不能默认递增了

````js
enum Constant {
    a = getvalue(),
    //枚举成员必须具有初始化表达式
    b, 
    c,
}
console.log(Constant['a']);
console.log(Constant.b);
console.log(Constant.c);
````

### 2.反向映射--只支持数字枚举反射

我们定义一个枚举值的时候，可以通过Enum['key门或者Eum.key的形式获取到对应的value值，Ts还支持反向映射，但是反向映射只支持数字枚举，字符串枚举是不支持的

````js
enum banner{
    Sueecss = 200,
    NotFound = 404,
    Error = 500
}
console.log(banner['Sueecss']); //200
console.log(banner[200]);//Sueecss
console.log(banner[banner['Sueecss']]);//Sueecss

// 为什么可以反向映射？因为js将对象的属性名和值，分别作为对象的属性名和值进行储存
{
    200; 'Success'
    400; 'NotFound'
    500; 'Error'
    Error:500
    NotFound:400
    Success:200
}
````

### 3.字符串枚举

Ts2.4版本新增的字符串枚举，字符串枚举要求每个字段的值都必须是字符串字而量，或者是该枚举值中另一个字符串枚举成员，先来看简单的例子

````js
const a =()=>{
    return 0
}
const names = '李斯'
enum Message{
    // 错误信息
    Error = 'error message',
   /*
   成功的错误消息
    枚举成员必须具有初始化表达式
   */
  SuccessError = 200,
//   含字符串值成员的枚举中不允许使用计算值
  ClientError = names
}
console.log(Message.SuccessError,'SuccessError')
console.log(Message.Error)
console.log(Message['ClientError'])
````

注意，这里的其他枚举成员指的是同一个枚举值中的枚举成员，[因为字符串牧举不能使用常量或者计算值，所以也不能使用其他枚单值中的成员。

### 4.异构枚举

异构枚举是指枚举值中既有字符串，又有数字等多种类型结合的枚举值，但是一般不建议使用。因为我们创建枚举值，一般都是类似的。如果我们定义的是状态值，一般都是数字如果定义的是提示信息，一般都是字符串方便我们维护和管理

````js
enum Result{
    Faild = 0,
    Success = "Success"
}
````

但如果不是真的需要，我们一般不建议使用

### 5.枚举成员类型和联合枚举类型

```js
枚举成员类型
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
// let cat1: Cat={
    //不能将类型“Animal.Dog”分配给类型“Animal.Cat”
    // type:Animal.Dog
// }
let dog: Dog={
    type:Animal.Dog
}
```

# 第三单元 接口

#### 1.基本用法

我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName和lastName,也就是英文的名和姓，然后返回一个拼接后的完整名字。来看下函数的定义：

`````js
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
`````

我们通过对象字面量的形式去限定我们传入的这个对象的结构，现在再来看下之前的调用会出现什么提示：

````js
getFullName();//应有1个参数，但获得0个
getFullName({age:18,phore:123465798})
//类型"{age:number;phone:number}"的参数不能赋给类型"{firstName:string;lastName:string}"的参数
getFullName({firstName:"Lison"})//缺少必要属性lastName

这些都是在我们编写代码的时候Typ©Sct提示给我们的错误信息，这样就避免了在使用函数的时候传入不正确的参数，接下来我们用这节课要讲的接口来书写上面的规则，我们使用interface来定义接口：
interface Info{
    firstName:string;
    lastName:string;
}
const getFullName = ({firstName,lastName}:Info)=>
`${firstName}${lastName}`

注意在定义接口的时候，你不要把它理解为是在定义一个对象，而要理解为括号包裹的是一个代码块，里面是一流弹声明语句儿，只个过声明的不是变量的值而是类型。声明也不用等号赋值，而是冒号指定类型。每条声明之前用换行分隔即可，或者也可以使用分号威者通号，都是可以的。
````

#### 3.绕开多余属性检查

有时我们并不希望TypeScript这么严格地对我们的数据进行检查，比如我们只需要保证传入getVegetables的对象有type属性就可以了，至于实际使用的时候传入对象有设有多余的属性，多余属性的属性值是什么类型，这些都无所谓，那就需要绕开多余属性检童，有如下三个方法：

##### 3.1使用类型断言

我们在基础类型中讲过，类型断言就是用来明确告诉下ypeScript,.我们已轻自行进行了检查，确保这个类型没有问题，希望下ypeScript对此不进行检查，所以最简单的方式就是使用类型断言：

```js
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
}as Vegetables)
```

##### 3.2添加索引签名

更好的方式是添加字符串素引签名，索引签名我们会在后面讲解，先来看怎么实现

