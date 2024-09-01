// Реализуйте функцию-декоратор spy(func), которая сохраняет все вызовы функции func в свойство calls массива.

function spy(func) {
   const calls = []
   const wrapperFunc = (...params) => {
       calls.push(params)
       return func(...params)
   }
   wrapperFunc.calls = calls
   return wrapperFunc
}

function sum(a, b) {
    return a + b;
}

const spySum = spy(sum);

console.log(spySum(2, 3));  // Ожидаемый вывод: 5
console.log(spySum(4, 5));  // Ожидаемый вывод: 9

// Просмотр вызовов функции
console.log(spySum.calls);  
// Ожидаемый вывод: [[2, 3], [4, 5]]