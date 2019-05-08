class Person {
  public name: string;
  protected age: string;
  private six: string;
  constructor(n: string, age: string, six: string) {
    this.name = n;
    this.age = age;
    this.six = six;
  }
  run(): void {
    console.log(`${this.name}在运动`);
  }
  ages(): void {
    console.log(this.age);
  }
}
let p = new Person("张三", "12", "男");
p.run();

// ts  实现继承  extends super
class Web extends Person {
  constructor(name: string, age: string, six: string) {
    super(name, age, six);
  }
}
let w = new Person("李四", "22", "女");
w.run();

// 类里面的修饰符
/**
 * public :公有在类里面 子类 类外面都可以访问
 * protected  保护类型 在类里面.子类里面可以访问 在类外部没法访问
 * private 私有 在类里面可以访问,子类.类外部都没法访问
 */

/**
 * 静态属性 静态方法
 */

class Sun {
  public name: string;
  static age: string = "11"; //静态属性
  constructor(name: string) {
    this.name = name;
  }
  run(): void {
    console.log(`${this.name}棒棒的`); //实力方法
  }
  static print(): void {
    console.log(`print`); //静态方法
    // 静态方法 没法直接调用类里面的属性
  }
}
Sun.print();
console.log(Sun.age);

/**
 * 多态 父类定义一个方法不去实现,让继承它的子类去实现 每一个子类有不同的表现
 * 多态属于继承
 */
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log("我不知道吃什么");
  }
}
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log("我是狗,我爱吃骨头");
  }
}
class Food {
  food: string;
  constructor(food: string) {
    this.food = food;
  }
  show(){

  }
}
class Bone extends Food{
  constructor(food:string){
    super(food)
  }
  show(){
    console.log('食物:骨头');
  }
}
class Master{
  static feed(an:any,Fd:any){
    an.eat()
    Fd.show()
  }
}
Master.feed(new Dog('狗狗'),new Bone('骨头'))


/** 
 * 抽象方法
 * 用 abstract 定义抽象类和抽象方法,抽象类中的抽象方法不包括具体实现并且必须在派生中实现
 * 抽象方法只能放在抽象类里面
 * 子类中必须有的方法
*/

abstract class Anima {
  name:string
  constructor(name:string){
    this.name=name
  }
  abstract eat():any //不包含业务逻辑
}
// 抽象类不能实例化
class Cat extends Anima{
  // 抽象类的子类必须实现抽象类里面的抽象方法
  constructor(name:string){
    super(name)
  }
  eat(){
    console.log('猫');
  } 
 }

 