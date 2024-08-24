// Напишите функцию byField(fieldName), которая принимает имя свойства и возвращает функцию для сортировки массива объектов по этому свойству.

const users = [{
        name: "John",
        age: 20
    },
    {
        name: "Pete",
        age: 18
    },
    {
        name: "Ann",
        age: 19
    }
];
// [{name: "Ann", age: 19}, {name: "John", age: 20}, {name: "Pete", age: 18}]

function byField(field) {
    return function compareFn(a, b) {
        if (a[field] < b[field]) {
            return -1
        } else if (a[field] > b[field]) {
            return 1
        }

        return 0
    }
}

users.sort(byField('age'));
console.log(users);


// // Нужно написать функцию, которая принимает число N и возвращает функцию, вызов которой первые N раз возвращает 'yes', а потом – 'no'.

function canGetCount(m) {
    return function name(n = m) {
        if (n > 0) {
            m--;
            return 'yes'
        } else {
            return 'no'
        }
    }
}
let getContNext = canGetCount(3)
getContNext()
getContNext()
getContNext()
getContNext()


/// --------------***********--------------- /////////
// Реализуйте функцию createTracker, которая возвращает два метода: track и getTracked. Метод track должен принимать число и запоминать его (используйте замыкание). Метод getTracked должен возвращать сумму всех запомненных чисел.

// Пример использования 

// const tracker = createTracker(); 
// tracker.track(5); 
// tracker.track(10); 
// console.log(tracker.getTracked());  15

function createTracker() {
    const ar = [];
    return {
        track: function (y) {
            ar.push(y)
        },
        getTracked: function (p) {
            return ar.reduce((ac,cur) => cur +=ac,0)
        }
    }
}
const tracker = createTracker();
tracker.track(1)
tracker.track(20)
console.log(tracker.getTracked())

// -------------********---------- ///////

// Нужно написать реализацию createCachedFunction. Она должна уметь работать с любым количеством аргументов

// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }

// const cachedFactorial = createCachedFunction(factorial);

// console.log(cachedFactorial(5));   Вычисляет и возвращает 120
// console.log(cachedFactorial(5));   Возвращает результат из кэша, 120
// console.log(cachedFactorial(6));  Вычисляет и возвращает 720

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


function createCachedFunction(f) {     
    return function name(n) {
       const objF = { }
        if(!objF.n) {
            objF.n = f(n)
            return f(n)
        }else {
            return objF.n
        }
        
    } 
}
const cachedFactorial = createCachedFunction(factorial);
console.log(cachedFactorial(5))
console.log(cachedFactorial(5))
console.log(cachedFactorial(4))

