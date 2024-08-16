// Нужно написать функцию, которая принимает число N и возвращает функцию, вызов которой первые N раз возвращает 'yes', а потом – 'no'.




function canGetCount(m) {
    function* generateSequenceNew(n) {
  
      for (let i = 0; i <= n; i++) {
         i < n ? yield 'yes' :   yield 'no';
      }    
    
    }
    
  let gen = generateSequenceNew(m);  
  return gen
}

let genFunc = canGetCount(3)
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())
