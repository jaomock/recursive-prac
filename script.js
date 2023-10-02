// 1
// function sumRange(n, total = 0){
//     if(n <= 0){
//         return total
//     }
//     return sumRange(n-1,total + n)
// }

// 2

// function power(base,exponent){
//     if(exponent === 0){
//         return 1
//     }
    // let x = Math.pow(base,exponent)
    // return x
//     return base * power(base,exponent - 1);
// }

// console.log(power (2,4))

// 2*(2,4-1)

// 3

// console.log(factorial())

// function factorial(n){
//     if(n === 1){
//         return 1
//     }
//     return n * factorial(n-1);
// }

// 4?



// 5

// let test = [1,2,3,10]

// function productOfArray(array){
//     if(array.length === 0){
//         return 0
//     }
//     return array.shift() * productOfArray(array)
// }

// console.log(productOfArray(test))

// 6

//     let i = 0
//     let num = 0

//     do{
//         i = i + 1
//         num = num + 1

//     } while (i < 8)


// console.log(num)
// let allFib = [0,1]
// let a = 0
// let b = 1


// function fib(num){
//     for(let i = 1; i < num; i++){
//         let newNum = a+b
//         a = b
//         b = newNum
//         allFib.push(newNum)
//     }
// }
// fib(8)
// console.log(allFib)


// function fibsRec(n){
//     if(n < 2){
//         return n
//     }
//     return fibsRec(n-1) + fibsRec(n-2)
// }

// console.log(fibsRec(8))

let testArray = [95,15,34,5,23,37,29,54]


function mergeSort (array){
    if(array.length < 2){
    return array
    }

    let half = Math.ceil(array.length / 2);

    let firstHalf = mergeSort(array.slice(0,half))
    let secondHalf = mergeSort(array.slice(half))

    return merge(firstHalf, secondHalf)
}


function merge(left,right){
    let finalArr = []

    while(left.length > 0 && right.length > 0){
        let singleArray = left[0] < right[0] ? left : right;
        let mergeElement = singleArray.shift();
        finalArr.push(mergeElement)
}
    return finalArr.concat(left,right)

}

console.log(mergeSort(testArray))