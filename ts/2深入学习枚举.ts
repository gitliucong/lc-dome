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
// 总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
// 这样的好处：减少代码中魔法数字的出现，便于后续维护代码

// 3.使用常量和计算值
enum Constant {
    // a = getvalue(),
    //枚举成员必须具有初始化表达式
    // b, 
    // c,
}
// console.log(Constant['a']);
// console.log(Constant.b);
// console.log(Constant.c);

// 2.反向映射--只支持数字枚举反射
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


// 字符串枚举
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
//   ClientError1 = names
}
console.log(Message.SuccessError,'SuccessError')
console.log(Message.Error)
// console.log(Message['ClientError1'])

// 异构枚举
enum Result{
    Faild = 0,
    Success = "Success"
}


// 枚举成员类型
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



















export {}