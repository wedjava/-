"use strict";
// 定义一个Anmal类
class Anmal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    barck() {
        console.log("1111");
    }
}
// Dg   继承Anmal类
class Dg extends Anmal {
    // Anmal是父类型 Dg是子
    // 使用后  子继承的父亲的方法 变量 属性、
    // 通过继承可以让多个类写在同一个父类中
    // 写一次就可以让子类型同时拥有父类方法
    // 如果想添加父类没有的方法 可以直接在子类添加
    ru() {
        alert("1111");
    }
}
// DgS  继承Anmal类
class DgS extends Anmal {
    // 方法重写 子类barck重写了父类的barck
    barck() {
        console.log("2222");
    }
}
const dogs = new Dg("C1", 12);
const dogs2 = new DgS("C2", 12);
console.log(dogs);
console.log(dogs2);
dogs2.barck();
dogs.barck();
dogs.ru();
//上面是继承
// 原来的写法
// 定义一个类
// class Dg {
//   name: string;
//   age: number;
//   barck() {
//     console.log("1111");
//   }
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// 在定义一个类
// class DgS {
//   name: string;
//   age: number;
//   barck() {
//     console.log("2222");
//   }
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const dogs = new Dg("C1", 12);
// const dogs2 = new DgS("C2", 12);
// console.log(dogs);
// console.log(dogs2);
// dogs2.barck();
// dogs.barck();
