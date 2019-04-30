"use strict";
/**
 * boolean
 * number
 * string
 * array
 * tuple 元组类型
 * enum 枚举类型
 * any 任意类型
 * null undefined
 * void 类型
 * never 类型
 */
/**
 * ts中定义变量必须指定类型
*/
var boolean = false;
var number = 1;
var str = '字符串';
var arr = [111]; //数组内所有的元素都是数字
var arr2 = [123];
// 元组类型 属于数组的一种 
var arr3 = [123, '123']; //必须存在 number和string
// 枚举类型
var flag;
(function (flag) {
    flag[flag["success"] = 0] = "success";
    flag[flag["error"] = 1] = "error";
})(flag || (flag = {}));
var s = flag.error;
console.log(s);
/**
 * 如果标识符号没有赋值打印的就是索引
 * 如果之前的标识符号赋值了就是他的值+1
*/
// any 任意类型
var any = 2;
/**
 * 任意类型的用处
 * 解决ts没有object的问题 同js一样
*/
// void类型 表示方法没有任何返回类型
function run() {
}
// never 类型:其他类型 包括 null 和nudefined 表示从来不会出现的值
// nerver变量只能被never类型所赋值
