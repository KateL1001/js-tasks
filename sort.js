//Реализуй функцию UniversalMax, которая будет работать следующим образом

Math.universalMax() // null
Math.universalMax(1, 4) // 4
Math.universalMax([11, 33], 24, [2, -3, 99]) // 99
Math.universalMax([43], [44], [103]) // 103

function universalMax(...args) {
    if(!args.length) {
        return null
    }
    const sortedArr = args.flat(Infinity).sort();
    return sortedArr[sortedArr.length - 1];
}

Math.__proto__.universalMax = universalMax;

Math.universalMax([11, 33], 24, [2, -3, 9979])

// ------------************------------- //

// Написать функцию, которая отсортирует массив таким образом, чтобы все нечетные по значению числа в этом массиве оказались отсортированы по возрастанию, а все четные оставить на своих местах.

// Например, для массива
[ 2, 3, 7, 4, 6, 1, 5, 8, 9 ]
// Получим
[ 2, 1, 3, 4, 6, 5, 7, 8, 9 ]


function sortOddAr(ar) {
    let arToSort = ar;
    let oddIndexes = []
    ar.filter((el,i) => el % 2 && oddIndexes.push(i)).sort().forEach((el,i) => arToSort[oddIndexes[i]] = el);
    return arToSort
}

console.log(sortOddAr([ 2, 3, 7, 4, 6, 1, 5, 8, 9 ]))