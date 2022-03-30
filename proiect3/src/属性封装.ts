// 定义一个类

class Person1 {
  // TS可以在属性前添加修饰符
  // public 修饰符的属性可以在任意的访问修改默认值
  // private 私有属性  私有属性只能在类内部进行访问修改,外面访问不到
  // 
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._age = age;
    this._name = name;
  }
  //   TS设置getter方法
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get age() {
    return this._age;
  }
  set age(value: number) {
    if (value >= 0) {
      this._age = value;
    }
  }
}
const ps = new Person1("swict", 121);

// 使用getter方法
console.log(ps.name);
