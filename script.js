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

/*
function checkSpam (str) {
  str.toLowerCase();
  if (str.includes("viagra")) { console.log("Недопустимо");}
  else { console.log("Все норм");}
} */

/*
function truncate(str, maxlength) {
  let testLength = str.length;
  if (str.length > maxlength) {

    let newStr = str.slice(0, maxlength - 3) + '...';
    return newStr;
  } else {return 'something wrong';}
} */

/*
function extractCurrencyValue(str) {
  return str.slice(1)
} */

/*
let styles = ["Джаз", "Классика", "Классика", "Some", "Some More"];

styles.push('Рок-н-ролл');

function midToClassic(arrToChange, value) {
  let arrLength = parseInt((arrToChange.length - 1) / 2);

  arrToChange[arrLength] = value;
  return arrToChange;
}
*/

/*
function sumInput() {
  let numbers = [];

  while (true) {
    
    let hisNumber = Number(prompt('Your number', ''));
    if (hisNumber == '' || hisNumber == null || !isFinite(hisNumber)) {
      break;
    }
    numbers.push(hisNumber);    
  }

  let sum = 0;

  for (let each of numbers) {
    sum += each;
  }
  return sum;
}

alert(sumInput());

*/

/*
function capitalizer(item, ind, arr) {

}

function camelize(value) {
  let splitter = value.split('-');
  let joined = [];
  console.log(splitter);
  
  splitter.forEach((item, ind) => { 

    if (ind === 0) { joined.push(item); return "first";}

    let letter = item[0].toUpperCase();

    let words = letter + item.slice(1);
    
    joined.push(words);

  });
  
  let stringed = joined.join('');
  console.log(stringed);
  let array1 = ['kocho', 'shinobu', 'kuchiki', 'first', 'last'];
  
  function filterRange(arr, a, b) {
    let babel = arr.filter((item, ind, arr1) => {
      if (ind > a && ind < b) { return item;}
    });
    return babel;
  }
  let arr = [5, 3, 8, 1];
  
  function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, ind, arr) => {
      if(a <= item && item <= b) { return "Pass"; }
      else { arr.splice(ind,1);} 
      
    }
    );}
    
    let arr = [5, 2, 1, -10, 8];
    
    arr.sort((a, b) => {return a-b;});
    
    console.log(arr);
    let arr = ["HTML", "JavaScript", "CSS"];
    
    let copies = function copySorted(arr) {
      let copyArr = arr.concat();
      return copyArr.sort();
    }
    
    let sorted = copies(arr);
    
    function Calculator() {
      this.methods = {
        "+": (a,b) => a + b
      }
      
      this.calculate = function(str) {
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
        
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
        } 
        
        return this.methods[op](a,b);
        
      }
      
      this.addMethod = function(operation, fn) {
        this.methods[operation] = fn;
      }
      
      this.deleteMethod = function(operation) {
        delete this.methods[operation];
      }
    }
  } 
  
  let vasya = { name: "Вася", surname: "Крутов", age: 25 };
  let petya = { name: "Петя", surname: "Крутов2", age: 30 };
  let masha = { name: "Маша", surname: "Крутов3", age: 28 };
  
  let users = [vasya, petya, masha];
  
  let names = users.map(user => ({ fullName: `${user.name} ${user.surname}`,
  id: user.id}));
  
  */

  /*
  function unique(arr) {
    let uniqArr = [];

    for(let element of strings) {
      if (!uniqArr.includes(element)) {uniqArr.push(element);}
    }
    console.log(uniqArr);
  }
  let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"];

  function unique(arr) {
    let makiseKurisu = new Set(arr);

    return makiseKurisu;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readSet = new WeakSet();

for (let i = 0; i < messages.length; i++) {
  readSet.add(messages[i]);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let sum = 0;
  if (salaries) {
    for (let salary of Object.values(salaries)) {
      sum += salary; 
    }
    return sum;
  } else { return 0;}
}
let user = {
  name: 'John',
  age: 30,
  ages: 300
}

function count(user) {
  let counter = 0;
  for (let i=0; i < Object.entries(user).length; i++) {
    counter++;
  }
  return counter;
}

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

 function topSalary(salaries) {
   let max = 0;
   let wName = null;
   
   for (const [name, salary] of Object.entries(salaries)){
     if (max < salary) {
       max = salary;
       wName = name;
      }     
    }
    return wName;
  }
  
  let feb20 = new Date.now();
  
  console.log(feb20);
  
  function getWeekDay(dateVar) {
    if (dateVar.getDay() == '1') {
      return 'ПН';
    }
  }
  
  
  function getDateAgo(date, days) {
    return new Date(+date - (days * 24 * 60 * 60 * 1000));
    
  }
  
  function secTillTomorrow() {
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(),(today.getDate() + 1));
    
    let untilTomorrow = Math.round((tomorrow - today) / 1000);
    
    console.log(`${untilTomorrow}`);
  }
  
  let user = {
    name: "Василий Иванович",
    age: 35
  };
  
  let elon = JSON.stringify(user);
  
  console.log(elon);
  
  let mask = JSON.parse(elon);
  
  console.log(mask);
  
  
  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup) {return undefined;} else { return value;}
  }));
  
  /* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  
  let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  function sumSalary(department) {
    if (Array.isArray(department)) {
      return department.reduce((prev, curr) => prev + curr.salary, 0);
    } else {
      let sum = 0;
      for (let eachValue of Object.values(department)) {
        sum += sumSalary(eachValue);
      }
      return sum;
    }
  }
  
  function sumTo(n) {
    if (n == 1) { return n;}
    else {
      return n + sumTo(n-1);  
    }
    
    // using iteration
    // let sum = 0;
    // for (let i = 0; n != 0; i++) {
      //   sum += n;
      //   n--;
      // }
      // return sum;
    }
    
    let list1 = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };
    
    function printList(list) {
      // let tmp = list;
      // while (tmp) {
        //   console.log(tmp.value);
        //   tmp = tmp.next;
        // }
        
        console.log(list.value);
        
        if(list.next) { printList(list.next);}
        else {
          
        }
      }
      
      function sum(a) {
        return function (b) {
          return a * b;    
        }
      }
      
      function inBetween(a, b) {
        return function (item) {
          if (item >= a && item <= b) { return true;}
          else { return false;}
        }
      }
      
      function inArray(arr) {
        return function(item) {
          return arr.includes(item);
        }
      }
      
      let arr = [1, 2, 3, 4, 5, 6, 7];
      alert( arr.filter(inBetween(3, 6)) );

      let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
      ];
      
      users.sort(byField('name'));
      
      function byField(field) {
        return function () {
          return (a, b) => a[field] > b[field] ? 1 : -1;
        } 
      }
 */
function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
alert( counter() ); // 10