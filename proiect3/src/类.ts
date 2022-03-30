// 使用class关键字 定义

//对象中包含2个部分
//  属性
// 方法

class Person {
  // 定义属性
  name: string = "笑笑"; //实例属性 可以读可以修改
  age: number = 18; //实例属性 可以读可以修改
  static age1: boolean = false; // static-- 静态属性
  readonly age2: Number = 80; // readonly 就只能读不能修改

  //   定义方法
  sayhay() {   //实例方法
    console.log("这是方法");
  }
}

const per = new Person();

console.log(per);
console.log(per.name, per.age); //打印笑笑,18

// 访问静态属性 只能通过类去调用 不能使用示例  通过 Person.age1才可以访问到
console.log(Person.age1);

console.log(per.age2); //只能读不能修改  不让报错

per.sayhay()           //