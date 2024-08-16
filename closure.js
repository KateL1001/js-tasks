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