/* new关键字 函数a
* 1.创建一个新对象
* 2.对象的构造函数为函数a
* 3.将对象作为this的上下文
* 4.返回this
*/

const myNew = function (func) {
  const newObj = {};
  newObj.__proto__ = func.prototype;
  const res = func.call(newObj);
  return res || this;
}

/*
* obj instanceof Object
* 判断构造函数实例的prototype属性是否在对象的原型链上
*/

function myInstanceof(left, right) {
  if (left.__proto__ === null) return false;
  if (left.__proto__ === right.prototype) return true;
  if (left.__proto__ !== right.prototype) {
    return myInstanceof(left.__proto__, right);
  }
}


function Animal() {
  this.name = ['animal', 'zoo'];
  this.say = function () {
    console.log(this.name);
  }
}
Animal.prototype.age = 1;


// 1.原型链继承
// 特点: 实例可继承的属性有
// 缺点: 新实例无法向父类构造函数传参数
function Cat() {
  this.name = ['cat'];
}

Cat.prototype = new Animal();

var cat = new Cat();

console.log(cat instanceof Animal);

// 2.构造函数继承
// 特点:
// 缺点:
function Dog() {
  Animal.call(this);
}

var dog = new Dog();

console.log(dog);
