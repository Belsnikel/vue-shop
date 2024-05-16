// объявили функцию конструктор с полями
function Cat(color, name) {
  this.color = color;
  this.name = name;
}

// вызвали конструктор
const cat = new Cat("black", "KOT");
console.log(cat);

//
function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  return constructor.apply(obj, args) || obj;
}

const myCat = myNew(Cat, "black", "KOT");
console.log(myCat);

// пример вызова методов функции конструктора с помощью new

function Calculator() {
  this.a = 0;
  this.b = 0;

  this.read = () => {
    this.a = Number(prompt("Введите 1-й аргумент"));
    this.b = Number(prompt("Введите 2-й аргумент"));
  };

  this.sum = () => {
    return this.a + this.b;
  };

  this.mul = () => {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log(calculator.a); // Выведет значение a
console.log(calculator.b); // Выведет значение b
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
