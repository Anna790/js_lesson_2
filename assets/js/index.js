'use strict';

/*Таски на условия
1) Делится ли число на 5, или на 3, или на 2 без остатка?

function chekNum(number) {
   return number % 5 === 0 || number % 3 === 0 || number % 2 === 0;
}


/*Таски на switch - ДЗ

1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
!!!!!!!!!!!!!!!!
const num = [1, 2, 3, 4];
switch (num) {
    case "1":
        {
            console.log("Зима");
        }
      break;
    case "2":
        {
            console.log ("Весна");
        }
      break;
    case "3":
        {
            console.log("Лето");
        }
      break;
    case "4":
        {
            console.log("Осень");
        }
      break;
      default:
          {
           console.log("Unknown action");

          }
}



/*2)  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
!!!!!!!!!!!!!!!!!!!!!!!!
let month = 1;
switch (month) {
    case 12:
    case 1:
    case 2: 
    {
        console.log("Зима");
    }
      break;
    case 3:
    case 4:
    case 5:
    {
        console.log("Весна");
    }
      break;
    case 6:
    case 7:
    case 8:
    {
        console.log("Лето");
    }
      break;
    case 9:
    case 10:
    case 11:
    {
        console.log("Осень");
    }
      break;
    default: {
        console.log("Unknown action");
    }  
}
/*3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 -  выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

const input = prompt("Enter the day of the week: 1 - Понедельник, 2 - Вторник, 3 - Среда, 4 - Четверг, 5 - Пятница, 6 - Суббота, 7 - Воскресеье");

switch (input) {
    case "1": 
        {
        console.log("Понедельник");
        }
    break;

  case "2": 
        {
        console.log("Вторник");
        }
    break;

  case "3": 
        {
        console.log("Среда");
        }
    break;

  case "4": 
        {
        console.log("Четверг");
        }
    break;

  case "5": 
        {
        console.log("Пятница");
        }
    break;

  case "6": 
        {
        console.log("Суббота");
        }
    break;

  case "7": 
        {
        console.log("Воскресенье");
        }
    break;
  default: {
      console.log("Unknown action");
  }
}

/*4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
!!!!!!!!
const day = 1;
switch (true) {
    case (< 11)
        {
            console.log("Первая декада");
        }
            break;
    case (< 32):
        {
            console.log("Третья декада");
        }
      break;
    default: {
            console.log("Вторая декада");
    }*/




/*Таски на циклы (Only FOR)

1) Запросить число и его факториал. Вывести.


function factorial(number){
    let result = 1;
    if(number === 0) {
        return result;
    }
    for (let i = 1; i <= number; i++) {
        result *=i;
    }
    return result;
}

console.log(factorial(prompt("Enter num")));



/*2) вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь

function sumSequence(n) {
    if (n < 1) {
        return;
    }
    let i,
        result = 0;
    for(i = 1; i <= n; i++) {
       result += 1 / i;
    }
    return result;
}

console.log(sumSequence(prompt("Enter your number")));

/*3) Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12). 

function numProduct(lim1, lim2){
    let result = 1;
    
    for (let i = lim1; i <= lim2; i++) {
        result *=i;
    }
    return result;
}


/*Таски на функции

1) Функция которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)

function isPrime(n) {
    if (n < 2) {
        return;
    }
    for(let i = 2; i < n; i++) {
        if (n % i === 0) {
            return 0;
        }
    } 
    return 1;
}



/*2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:

function  checkMultiplicity(num1,num2) {
    return num1 % num2 === 0;
}

    checkMultiplicity(25, 5) // true
    checkMultiplicity(15, 3) // true
    checkMultiplicity(15, 5) // true
    checkMultiplicity(15, 4) // false*/

/*3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

function isTriangle(a, b, c) {
    return  a + b > c && a + c > b && b + c > a;
}

/*4) Написать функции расчета площадей (поверхности) следующих фигур/тел:  треугольника, прямоугольника


function getRectangleArea(a,b) {
    return a * b;
}

function getTriangleArea(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

	/*Таски на объекты
1.1 создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.

const student = {
    name: "Vasya",
    surname: "Pupkin",
    isMail: true,
    contactDetails: {
        phone: 0982426730,
        email: "pupkin@gmail.dev",
    },
};

/*1.2 создать объект, который содержит свойства, о факультете и кафедре.

const university = {
    faculty: {
        name: "Faculty of Space Research",
        dean: "Suvorov I.I.",
        numberOfPersons: 220,
    },
    department = {
        name: "Automatic control system",
        HeadOfDepartment: "Velikiy O.O.",
        number: 50,

    },
}

/*2.1 Создать числовой массив и проинициализировать его*/

const array = new Array(1, 2, 3, 4, 5, 10);


/*2.1* (усложненное) инициализация с помощью случайных чисел*/

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createArray(lenght) {
    const arr = [];
    for(let i = 1; i <= lenght; i++) {
        array.push(getRandomInt(100));
    }
}

/*2.2 Вывести размер массива*/
console.log(array.lenght);
/*2.3 Вывести элементы с четными индексами*/

const array = new Array[1, 3, 6, 8, 0];
array.forEach(function(element, index) {
    if(index % 2 === 0) {
        console.log(element);
    }
});

/*2.4 Вывести только четные элементы (четные числа делятся на 2 без остатка)*/

const array = new Array[1, 3, 6, 8, 0];
console.log(array.filter(number => number % 2 === 0));
/*2.5 Вывести индексы нулевых элементов (элемент равен нулю)*/

const array = new Array[1, 3, 6, 8, 0];
array.forEach(function(element, index) {
    if(element === 0) {
        console.log(index);
    }
});

/*2.6 Подсчитать количество нулевых элементов*/

const array = new Array[1, 3, 6, 8, 0];
console.log(array.filter(number => number === 0).length);

/*3.1 Создать функции-конструкторы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

function Book(autor, title, yearOfPublication, publisher) {
    this.autor = autor;
    this.title = title;
    this.yearOfPublication = yearOfPublication;
    this.publisher = publisher; 
}

function ElBook(autor, title, yearOfPublication, publisher,format, elNumber) {
    this.autor = autor;
    this.title = title;
    this.yearOfPublication = yearOfPublication;
    this.publisher = publisher; 
    this.format = format;
    this.elNumber = elNumber;
}
const book1 = new Book("Ken Kesey", "One flew over the cuckoo's nest", 1962, "Fors");
const elBook1 = new ElBook("Ken Kesey", "One flew over the cuckoo's nest", 1962, "Fors", "fb2", 22);


/*4 Дописать функцию конструктор MyArray. 
Должны быть реализованы следующие методы: push,pop,forEach
Class comments*/



        
