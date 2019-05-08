// 属性接口 对json的约束

/**
 * ts中自定义方法传入参数对 json进行约束
 */
function printlable(lables: { lable: string }): void {
  console.log("print");
}
printlable({lable:'2222'})

/** 
 *接口:行为和动作的规范  对批量方法进行约束
*/
interface FullName{
    firstName:string,
    secondName:string//必须有这2个属性
}

function printName(name:FullName){
    console.log(name.firstName+'-'+name.secondName);
}
