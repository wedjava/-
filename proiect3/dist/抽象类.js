"use strict";
// 抽象类
// abstract开头的是抽象类
// 1. 不能用来创建对象
// 2. 用来继承的类
// 抽象类中可以添加抽象方法
// 1.
class Amin1 {
    constructor(name) {
        this.name = name;
    }
}
class DG1 extends Amin1 {
    sahel() {
        alert("字类型的方法");
    }
}
const dsupe1 = new DG1("抽象类");
dsupe1.sahel();
