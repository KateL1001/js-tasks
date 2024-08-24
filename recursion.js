// Рекурсия
function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return sumTo(n - 1) + n
  }
}
console.log(sumTo(100)); // Ожидаемый результат: 5050


//решение через цикл
function sumT(n) {
  let result = n;

  for (let i = 0; i < n; i++) {
    result += i;
  }

  return result;
}

console.log(sumT(100))


// -----------------******************************------------------------
// Рекурсия + доп. Память
// Напишите рекурсивную функцию fibonacci(n), которая возвращает n-ное число Фибоначчи. Сделайте оптимизированную версию с использованием мемоизации.

function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

/// с мемоизацией
function fibonacci2(n) {
  const obj = {}
 if(n < 3 ) return 1
 if(obj[n]) return obj[n]
 if(!obj[n]) return obj[n] = fibonacci(n - 1) + fibonacci(n - 2);
}

//цикл
function fibonacciCycle(n) {
  let p = []
  for (let index = 0; index < n; index++) {
    if (p.length <= 1) {
      p.push(1)
    } else {
      p.push(p[p.length - 1] + p[p.length - 2])
    }
  }
  return p[p.length - 1]
}

fibonacci(10)

console.log(fibonacci(10)); // Ожидаемый результат: 55

