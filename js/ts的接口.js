"use strict";
// 属性接口 对json的约束
/**
 * ts中自定义方法传入参数对 json进行约束
 */
function printlable(lables) {
    console.log("print");
}
printlable({ lable: '2222' });
function printName(name) {
    console.log(name.firstName + '-' + name.secondName);
}
