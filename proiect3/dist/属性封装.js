"use strict";
// 定义一个类
class Person1 {
    constructor(name, age) {
        this._age = age;
        this._name = name;
    }
    //   TS设置getter方法
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
    }
}
const ps = new Person1("swict", 121);
// 使用getter方法
console.log(ps.name);
