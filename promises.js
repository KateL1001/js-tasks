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
