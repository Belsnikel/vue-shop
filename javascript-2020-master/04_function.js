// 1 Функции
// Function Declaration
// function greet(name) {
//   console.log('Привет - ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрелочные функции
function greet() {
  console.log('Привет - ')
}

const arrow = (name, age) => {
  console.log('Привет - ', name, age)
}

const arrow2 = name => console.log('Привет - ', name)

// arrow2('Vladilen')

const pow2 = num => num ** 2

// console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 4))
// console.log(sum())

function sumAll(...all) {
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}

const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкания
function createMember(name) {
  return function(lastName) {
    console.log(name + lastName)
  }
}

const logWithLastName = createMember('Vladilen')
console.log(logWithLastName('Minin'))
console.log(logWithLastName('Kuznezov'))

// Потоков в js = 1
// Event loop (асинхронность) Микро таски и макро таские. Очередь

var arr = [7, 22, 33, 4];

/*for (var i = 0; i < arr.length; i++) {
  function acc() {
    var str = i;
    setTimeout(() => {
      console.log(str, arr[str])
    }, 3000);
  }
  acc();
}*/

/*for (var i = 0; i < arr.length; i++) {
  function acc(j) {
    setTimeout(() => {
      console.log(j, arr[j])
    }, 3000);
  }
  acc(i);
}*/

for (var i = 0; i < arr.length; i++) {
  // iife
  ((j) => {
    setTimeout(() => {
      console.log(j, arr[j])
    }, 3000);
  })(i)
}


// var
{
  // Global scope
  arr = [7, 22, 33, 4], i = 4 // 3 секунды
  {
    // scrope for
    (() => {
      console.log(i, arr[i])
    })()
  }
}

// let
{
  // Global scope
  arr = [7, 22, 33, 4]
  {
    // scrope for
    i = 0, i = 1, i = 2, i = 3
    (() => {
      console.log(i, arr[i])
    })()
  }
}

// Практический пример замыкания
function test(name) {
  let _name = name

  return {
    getName: function() {
      return _name
    },
    setName: function(name) {
      _name = name
    }
  }
}

const myTest = test('Я тест')
myTest.setName('Я поменял имя')