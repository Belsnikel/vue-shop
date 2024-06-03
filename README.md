<b>Оглавление

[оператор new и функция конструктор](#оператор-new-и-функция-конструктор)
[RegExp и регулярные выражения](#regexp-и-регулярные-выражения)
[Наследование](#Наследование)
[Принципы SOLID](#Принципы-solid)

## Оператор new и функция конструктор.

Конструктор, оператор "new"
Обычный синтаксис позволяет создать только один объект. Но зачастую нам нужно создать множество похожих, однотипных объектов, таких как пользователи, элементы меню и так далее.

```
const person = {
  name: 'Alice',
  age: 30,
  isProgrammer: true,
}

```

Это можно сделать при помощи функции-конструктора и оператора "new".

Функция-конструктор
Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:

Имя функции-конструктора должно начинаться с большой буквы.
Функция-конструктор должна выполняться только с помощью оператора "new".

Например:

```
// Определение функции-конструктора
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Создание экземпляра объекта
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Вызов метода
person1.sayHello(); // Вывод: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Вывод: Hello, my name is Bob and I am 25 years old.

```

Когда функция вызывается как new Person(...), происходит следующее:

1.  Создаётся новый пустой объект, и он присваивается this.
2.  Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства.
3.  Возвращается значение this.

Конструкторы не имеют оператора return. Их задача – записать все необходимое в this, и это автоматически становится результатом.

Ссылки по теме:

- [Js Classes](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
- [new operator](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new)
- [constructor](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/constructor)
- [prototype](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
- [new - live examples](https://github.com/Belsnikel/Jscourse/blob/master/js-interview-guide-master/09_new.js)

## RegExp и регулярные выражения.

Типовые регулярные выражения:

/^[a-zA-Z]$/ - это регулярное выражение проверяющее, что символ в строке является буквой или цифрой.

/^[\x00-\x7F]$/ - это регулярное выражение проверяющее, что символ в строке является кодировкой ASCII.

## Наследование

Пример на наследовании прототипов на классах в ES6. (актуально в 99% случаях)

```
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  buy() {
    console.log('Buy');
  }
}

class AudioBook extends Book {
  constructor(title, author, length) {
    super(title, author);
    this.length = length;
  }
  log() {
    console.log(`${this.title} - ${this.length}`)
  }

}

```

Пример наследования прототипов на конструкторах в ES5. (устаревший вариант)

```
const Book = function(title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.buy = function() {
  console.log('Buy');
}

const AudioBook = function(title, author, length) {
  Book.call(this, title, author);
  this.length = length;
};

AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;
AudioBook.prototype.log = function() {
  console.log(`${this.title} - ${this.length}`)
}

const book = new AudioBook('War and Peace', 'Leo Tolstoy', 500);

book.buy();
book.log();
console.log(book)

```

Пример шаблона игры на классах

```

class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }
  recieveDamage(damage) {
    this.health = this.health - damage
    console.log(this.health)
  }
}

class Sword {
  #damage;
  constructor(damage) {
    this.#damage = damage
  }
  strike(enemy) {
    enemy.recieveDamage(this.#damage)
  }
}

class Orc extends Enemy {
    constructor(health) {
    super(health);
  }
  recieveDamage(damage) {
      if(Math.random() > 0.5) {
        this.health = this.health - damage;
      }
    console.log(this.health);
  }
}

const enemy = new Orc(10);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);

```

## Принципы SOLID

S - Принцип единой ответственности

Каждый класс или модуль должен отвечать за одну конкретную задачу или часть функциональности и не должен включать в себя несколько разных обязанностей. Если класс выполняет несколько функций, то при изменении одной функции могут быть затронуты и другие, что приводит к сложностям в сопровождении и увеличивает риск появления ошибок.

```
class Character {
  #inventor = [];
  #health = 100;

  pickItem(item) {
    this.#inventor.push(item);
  }
  recieveDamage(damage) {
    this.#health -= damage
  }
}

class DB {
  save(item) {
    localStorage.setItem(char, item);
  }
  load() {
    ///...
  }
}

```

O - Принцип открытости/закрытости

Программные сущности (классы, модули, функции и т.д.) должны быть открыты для расширения, но закрыты для модификации.

```
class Treasure {
  value = 0;
}

class Coin extends Treasure {
  value = 1;
}

class Coin extends Treasure {
  value = 2;
}

class Brilliant extends Treasure {
  value = 5;
}

class Inventory {
  #score;
  pick(treasure) {
    this.#score += treasure.value;
  }
}

```

L - Принцип подстановки Барбары Лисков

Объекты в программе должны быть заменяемы их экземплярами производных классов без изменения корректности программы.

Основная идея
Принцип утверждает, что если S является подтипом T, то объекты типа T могут быть заменены объектами типа S (т.е. объектами подклассов S), не изменяя желаемых свойств программы (корректности, задачи и так далее)

```
class User {
  #role = 'user';

  getRole() {
    return this.#role;
  }
}

class Admin extends User {
  #role = ['user', 'admin'];

  getRole() {
    return this.#role.join(', ');

  }
}

function logRole(user) {
  console.log('Role:' + user.getRole().toUpperCase());
}

logRole(new User());
logRole(new Admin());
```
