// 接口--就是用来定义一个类的结构

type myType = {
  name: string;
  age: number;
};

// 定义接口  使用 interface  用来定义一个类中包括哪些属性和
interface mttype {
  name: string;
  age: number;
}

const obj: myType = {
  name: "111",
  age: 13,
};

const obj1: mttype = {
  name: "111",
  age: 13,
};
