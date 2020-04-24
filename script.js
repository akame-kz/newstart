/* let check = confirm('Start?');

if (check) {
let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');



let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let monthlyExpense = prompt('ВВедите обязательную стать расходов в этом месяце');
  let howMuch = +prompt('Во сколько обойдется?');

  if ( isNaN(howMuch)) {
    alert('Один из полей заполнен неправильно');
    break;
  }
  appData.expenses[monthlyExpense] = howMuch;
} 

}

let monthlyExpense = prompt('Обязательна');

console.log(monthlyExpense.trim() === ' '); 
// javascript.ru
const multiplyNumeric = (menu) => {
  for(let key in menu) {
    if (isNaN(menu[key])) {
      console.log(`(${key} = ${menu[key]}) is not a number`);
      continue;
    } else {
      menu[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  
  title1: "My menu",
  title2: "My menu"
};

multiplyNumeric(menu);


let calculator = {
  read() {
    this.first = +prompt('Число 1','');
    this.second = +prompt('Число 2', '');
  },

  sum() {
    alert(this.first + this.second);
  },

  mul() {
    alert(this.first * this.second);
  }
};
calculator.read();

calculator.sum();

calculator.mul();*/

/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};
ladder.up().up().down().showStep().showStep(); */

/*
function a() {};

function b() {};
let newObj = notNew = new a();
alert(newObj === notNew); */

/*
function Calculator() {
  this.read = function() {
    this.first = prompt("First Number", "");
    this.second = prompt("Second", "");
  };
 this.sum = function() {
    return this.first + this.second;
  };
 this.mul = function() {
    return this.first * this.second;
  }
}

let calc = new Calculator();

calc.read();


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("Number to add", "");
    console.log("New value is " + this.value);
    return "method finished.";
  }
}

let acc = new Accumulator(1);*/

/*
const random = (first, second) => {
  return parseInt(first + Math.random() * (second - first));
}
alert(random(1,5)); */

// function ucFirst(str) {
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   return newStr;
// }

// console.log(ucFirst("вася") == "Вася");

