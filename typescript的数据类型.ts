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
let boolean:boolean=false
let number:number=1
let str:string='字符串'
let arr:number[]=[111] //数组内所有的元素都是数字
let arr2:Array<number>=[123]

// 元组类型 属于数组的一种 
let arr3:[number,string]=[123,'123'] //必须存在 number和string

// 枚举类型
    enum flag {success,error}
    let s:flag=flag.error
    console.log(s)
/** 
 * 如果标识符号没有赋值打印的就是索引
 * 如果之前的标识符号赋值了就是他的值+1
*/

// any 任意类型
let any:any=2
/** 
 * 任意类型的用处
 * 解决ts没有object的问题 同js一样
*/

// void类型 表示方法没有任何返回类型
function run():void{
    
}

// never 类型:其他类型 包括 null 和nudefined 表示从来不会出现的值
// nerver变量只能被never类型所赋值

