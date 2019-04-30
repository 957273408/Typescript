"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(n, age, six) {
        this.name = n;
        this.age = age;
        this.six = six;
    }
    Person.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
    Person.prototype.ages = function () {
        console.log(this.age);
    };
    return Person;
}());
var p = new Person("张三", "12", "男");
p.run();
// ts  实现继承  extends super
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name, age, six) {
        return _super.call(this, name, age, six) || this;
    }
    return Web;
}(Person));
var w = new Person("李四", "22", "女");
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
var Sun = /** @class */ (function () {
    function Sun(name) {
        this.name = name;
    }
    Sun.prototype.run = function () {
        console.log(this.name + "\u68D2\u68D2\u7684"); //实力方法
    };
    Sun.print = function () {
        console.log("print"); //静态方法
        // 静态方法 没法直接调用类里面的属性
    };
    Sun.age = "11"; //静态属性
    return Sun;
}());
Sun.print();
console.log(Sun.age);
/**
 * 多态 父类定义一个方法不去实现,让继承它的子类去实现 每一个子类有不同的表现
 * 多态属于继承
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("我不知道吃什么");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log("我是狗,我爱吃骨头");
    };
    return Dog;
}(Animal));
var Food = /** @class */ (function () {
    function Food(food) {
        this.food = food;
    }
    Food.prototype.show = function () {
    };
    return Food;
}());
var Bone = /** @class */ (function (_super) {
    __extends(Bone, _super);
    function Bone(food) {
        return _super.call(this, food) || this;
    }
    Bone.prototype.show = function () {
        console.log('食物:骨头');
    };
    return Bone;
}(Food));
var Master = /** @class */ (function () {
    function Master() {
    }
    Master.feed = function (an, Fd) {
        an.eat();
        Fd.show();
    };
    return Master;
}());
Master.feed(new Dog('狗狗'), new Bone('骨头'));
/**
 * 抽象方法
 * 用 abstract 定义抽象类和抽象方法,抽象类中的抽象方法不包括具体实现并且必须在派生中实现
 * 抽象方法只能放在抽象类里面
*/
var Anima = /** @class */ (function () {
    function Anima() {
    }
    return Anima;
}());
// 抽象类不能实例化
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    // 抽象类的子类必须实现抽象类里面的抽象方法
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Anima));
