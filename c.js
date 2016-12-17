// function Person(name, age){
//   this.name = name;
//   this.age = age;
//   this.sayHello = function(){
//     console.log(`Xin chao, toi la ${this.name}, nam nay ${this.age}`);
//   }
//   this.namMoi = function(){
//     this.age ++;
//   }
// }

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    console.log(`Xin chao, toi la ${this.name}, nam nay ${this.age}`);
  }
  namMoi(){
    this.age++;
  }
}
// var pho = new Person('Pho', 18);
// pho.namMoi();
// pho.sayHello();

class Child extends Person{
  constructor(name, age, hobby){
    super(name, age);
    this.hobby = hobby
  }
  sayHello(){
    console.log(`Xin chao, em la ${this.name}, nam nay em ${this.age} tuoi,
      thich choi ${this.hobby}`);
  }
}

var teo = new Child('Teo', 3, 'may bay');
teo.sayHello();
