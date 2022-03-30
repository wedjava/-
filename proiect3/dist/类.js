"use strict";
// 使用class关键字 定义
//对象中包含2个部分
//  属性
// 方法
class Person {
    constructor() {
        // 定义属性
        this.name = "笑笑"; //实例属性 可以读可以修改
        this.age = 18; //实例属性 可以读可以修改
        this.age2 = 80; // readonly 就只能读不能修改
    }
    //   定义方法
    sayhay() {
        console.log("这是方法");
    }
}
Person.age1 = false; // static-- 静态属性
const per = new Person();
console.log(per);
console.log(per.name, per.age); //打印笑笑,18
// 访问静态属性 只能通过类去调用 不能使用示例  通过 Person.age1才可以访问到
console.log(Person.age1);
console.log(per.age2); //只能读不能修改  不让报错
per.sayhay(); //
