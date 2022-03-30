class Amin {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sahel() {
    alert("super调父亲里面的方法");
  }
}

class DG extends Amin {
    // supper 代表当前父类
  sahel() {
    super.sahel();
  }
}

const dsupe = new DG("123");
dsupe.sahel();
