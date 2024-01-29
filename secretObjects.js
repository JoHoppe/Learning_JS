class vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vec2) {
    this.x += vec2.x;
    this.y += vec2.y;
  }

  sub(vec2) {
    this.x -= vec2.x;
    this.y -= vec.y;
  }

  get length() {
    console.log(Math.floor((this.x ** 2 + this.y ** 2) ** 0.5));
  }
}

let vec1 = new vec(8, 8);
let vec2 = new vec(1, 1);
vec1.add(vec2);
console.log(vec1);
vec1.length;

class Group  {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  contains(value) {
    return value in this.items;
  }

  add(value) {
    if (!this.contains(value)) {
      this.length++;
      this.items.push(value);
    }
  }

  delete(value) {
    const index = this.items.indexOf(value);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.length--;
    }
  }

  static from(itt_Object) {
    let fromGroup = new Group();
    for (element of itt_Object) {
      fromGroup.add(element);
    }
    return fromGroup;
  }
}

let myGroup = new Group();
myGroup.add(12);
myGroup.add(10);
myGroup.delete(10);
console.log(myGroup);
