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