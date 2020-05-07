/*
function toAlert(x) {
  console.log(`The sum of unique numbers`);
  return x;
}

function cacheDecorator(func) {
  let cache = new Map();

  return function (b) {
    
    if(cache.has(b)) {
      let sum = 0;
      for (let [key, value] of cache) {
        sum += +value;
      }
      return 'The sum ' + sum +' has the last submitted numbers';
    }

    let result = func(b);

    cache.set(b, result);

    return result;
  }
}

function f() {
  alert("hello!");
}

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

let dictionary = Object.create(null, {
  toString: {
    enumerable: false,
    writable: false,
    configurable: false,

    value() {
      return Object.keys(this).join(', ');
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
  console.log(key);
}

console.log(dictionary.toString());

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}

let rabbit = new Rabbit("Lobit  ");

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();    



class Clocki {
  constructor({ template }) {
    this.template = template;
  }
  
  render() {
    
    let date = new Date();
    
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    
    let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
    
    console.log(output);
    
  }
  
  stop() {
    clearInterval(this.timer);
  };
  
  start() {
    this.render();
    this.timer = setInterval(() => { this.render();}, 1000);
  };
}

class ExtendedClock extends Clocki {
  constructor(options) {
    super(options);
    let { precision=1000 } = options;
    this.precision = precision;
  }
  
  start() {
    this.render();
    this.timer = setInterval( () => {this.render();}, this.precision);
  }
}

let obje = new Clocki({ template: 'h:m:s'});
let question = +prompt('Какой интервал?','');
let extObj = new ExtendedClock({ template: 'h:m:s', precision: question});
class CoffeeMachine {
  // ...
  
  constructor(power) {
    this._power = power;
  }
  
  get power() {
    return this._power;
  }
  
}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W

coffeeMachine.power = 25; // Error (no setter)
let user = {
  [Symbol.toStringTag]: "User"
};

alert( user.toString.call(user) ); // [object User]

class FormatError extends SyntaxError {
  constructor(properties) {
    super(properties);
    this.name = this.constructor.name;
    this.message = 'Ошибка форматирования';
  }
}

let budget = 150;
let price = 15;
let quantity = 0;
while (budget > price) {
  quantity++;
  budget -= price;
  console.log(`bought ${quantity} phones at $${price} and have $${budget} left.`);
  
}

function assemble(name) {
  this.name = name;
  
  createFull = function() { 
    this.full = this.name + ' ' + this.surname;
  }
}

function diss(name, surname) {
  assemble.call(this, name);
  this.surname = surname;
}

diss.prototype = Object.create(assemble.prototype);

let obj = new diss('hello', 'world');

console.log(document.querySelector('[data-widget-name]').dataset.widgetName);
*/
  // добавление стиля для одной ссылки
  let link = document.querySelector('a');
  link.style.color = 'orange';

  let aCollection = document.body.querySelectorAll('a');
  let k = 0;
  for (let each of aCollection) {
    if (!each.getAttribute('href')) continue;
    if (!each.getAttribute('href').includes('://')) continue;
    if (each.getAttribute('href').includes('http://internal.com')) continue;
    
    each.style.color = 'orange';
  }