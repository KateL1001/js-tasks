
// Напишите функцию, которая принимает массив URL-ов и выполняет запросы к ним. Если один из запросов завершается ошибкой, остальные запросы должны быть отменены.
const urlsExample = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    // 'https://purpleschool.ru/pizza-api-demo44/products'
];

function fetchAll(urls) {
    
    
   const prom = new Promise((resolve,reject) => {
        let respArr = []
        let respCount = 0
        urls.forEach(async (url) => {
            try {
                const {data} = await axios.get(url)
                respCount++
                respArr.push(data);                
                if (respCount === urls.length) {                    
                    resolve(respArr);
                }
            } catch (error) {
                reject("Error")
            }
                        
                
        });
        
       
       
    });

    prom.then(r => console.log('res',r)).catch((er) =>  console.log('errror',er))
}

console.log('lll',fetchAll(urlsExample))


// --------******-------- ///

// Напишите функцию delay, которая возвращает промис, который разрешается через указанное количество миллисекунд.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Пример использования
delay(3000).then(() => console.log("Прошла 3 секунда"));

// Напишите функцию sequence, которая принимает массив функций, возвращающих промисы, и выполняет их последовательно.


function sequence2(tasks) {
    return tasks.forEach((task) => {
        task.then(console.log)
    })
}

sequence2([
  new Promise(resolve => setTimeout(() => resolve(1), 1000)), 
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), 
  new Promise(resolve => setTimeout(() => resolve(3), 3000)) 
])


// --------------- **********------------ //

// Напишите функцию поллинга, которая будет делать повторяющиеся запросы к API до тех пор, пока не будет получен желаемый результат или не истечет время ожидания.



function fetchWithRetry(url, time) {
    let timer ;
    let timeInterval = 0;
   
    timer = setInterval(async () => {
        try {
            const {data} = await axios.get(url);
            if(data) {
                console.log('data1',data)
                clearInterval(timer);
            }
        } catch (error) {
            if(timeInterval === time) {
                clearInterval(timer);
                console.log('bad request =(');
            }
            timeInterval++;
        }
    }, 1000);
}

fetchWithRetry('https://purpleschool.ru/pizza-api-demo44/products', 5)