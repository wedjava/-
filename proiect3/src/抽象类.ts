// 抽象类

// abstract开头的是抽象类
// 1. 不能用来创建对象
// 2. 用来继承的类

// 抽象类中可以添加抽象方法
// 1.

abstract class Amin1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  //   sahel() {
  //     alert("super调父亲里面的方法");
  //   }

  //   定义抽象方法
  //  1.方法前面加 abstract,没有方法体
  //  2.抽象方法只能定义在抽象类中  子类必须进行重写
  abstract sahel(): unknown;
}

class DG1 extends Amin1 {
  sahel() {
    alert("字类型的方法");
  }
}

const dsupe1 = new DG1("抽象类");
dsupe1.sahel();
