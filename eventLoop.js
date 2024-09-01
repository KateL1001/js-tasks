console.log('Start'); // 1

function f() {
  queueMicrotask(() => {
    console.log('Microtask');
    f(); 
  });
}

f(); // 3 + зависнет (не условия выхода из рекурсии)

setTimeout(() => {
  console.log('Timeout'); // не выведется
}, 0);

console.log('End'); // 2

// Вопросы к задаче:
// Будет ли вызван колбэк setTimeout с выводом 'Timeout' в консоль?
// Каков порядок выполнения операций, и почему колбэк setTimeout никогда не выполнится?

//2

console.log('1'); //1

setTimeout(function() {
  console.log('2'); //4
}, 0);

Promise.resolve().then(function() {
  console.log('3'); //3
});

console.log('4'); //2

// Вопросы:
// Какой будет порядок вывода в консоль?
// Объясните порядок выполнения, учитывая работу Event Loop.

// синхронный код => микротакки => макротаски
