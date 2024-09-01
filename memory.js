//1
function memoryLeak() {
    leakedArray = []; 
    for (let i = 0; i < 1000000; i++) {
      leakedArray.push(i);
    }
  }
  
  memoryLeak();
  
  
//  Вопросы:
//   Почему в этом коде происходит утечка памяти?
//   Как исправить код, чтобы предотвратить утечку?

//  leakedArray  без var/let/const = window.leakedArray
// глобальные переменные не обрбатываются сборщком мусора => утечка памяти
// решение 1) приравнять глоб переменную к null в конце выполения кода 2) добавлять 'use strict' 3) объявлять переменные через let/const

//2
function createClosure() {
  const largeArray = new Array(1000000).fill('Some data');
  return function() { // return console.log(largeArray[0]);   
    console.log(largeArray[0]);   
  };
}

const closure = createClosure(); // const closure = createClosure;



// Вопросы:
// Почему здесь происходит утечка памяти?
// Как исправить код, чтобы избежать утечки?

/// непонятно зачем тут замыкание, можно просто вернуть console.log(largeArray[0]);  

//3

function createCyclicReferences() {
  const obj1 = {};
  const obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1;
}

createCyclicReferences();

// Вопросы:
// Почему в этом коде происходит утечка памяти?
// Как изменить код, чтобы предотвратить утечку?

//Объекты ссылаются др на др и сбрщик мусора не сможет удалить их
//Решение:
// function createCyclicReferences() {
//   const obj1 = {};
//   const obj2 = {};
//   const clone1 = {...obj1};
//   const clone2 = {...obj2};
//   obj1.ref = clone2;
//   obj2.ref = clone1;
// }



  