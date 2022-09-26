/* 定义字符串类型 */
var apple = '苹果';
/* 不能将类型“number”分配给类型“string”。 */
// let apples:string = 1
/* 定义数字类型 */
var one = 1;
/* 不能将类型“string”分配给类型“number” */
// let one1:number = "1"
/* 定义数组 */
var array = [1, 2, 3, 4];
var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4];
var array3 = [1, 2, 3, 4];
var array4 = [1, 2, 3, 4];
var array5 = [1, 2, 3, 4];
/* 定义对象 */
// 返回never的函数必须存在无法到达的终点
function error(message) {
    throw new Error(message);
}
// 推断返回值类型为never
function fail() {
    return error('something failed');
}
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// 联合类型
var allType;
allType = 1;
allType = 'eddd';
// 不能将类型“boolean”分配给类型“string | number
// allType = false
// 类型断言
var Status;
(function (Status) {
    Status[Status["Uploading"] = 0] = "Uploading";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Falied"] = 2] = "Falied";
})(Status || (Status = {}));
console.log(Status.Uploading);
console.log(Status['Success']);
console.log(Status.Falied);
