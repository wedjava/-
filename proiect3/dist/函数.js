"use strict";
class DOG {
    // 构造函数
    // 构造函数会在对象创建的时候调用
    constructor(name, ages) {
        //   this表示当前的示例
        // 当然的对象就是新建的那根对象
        // 可以通过this向新建对象中加属性
        console.log(this);
        this.name = name;
        this.ages = ages;
    }
    barck() {
        alert("冲冲");
    }
}
const dog = new DOG("ccc", 4); //传入参数
console.log(dog); //打印出来就是传入的值
dog.barck();
