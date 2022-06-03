let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let num = []
let str = []
let bool = []
let obj = []

arr.filter(item => {
    if(typeof(item) === 'number') {
        num++
    } else if(typeof(item) === 'string') {
        str++
    } else if(typeof(item) === 'boolean') {
        bool++ 
    } else if(typeof(item) === 'object') {
        obj++ 
    }
})

if(num > 5) {
       console.log(`Good`);
    }else{
       console.log(`Sorry`);
    }

console.log(num)
console.log(str)
console.log(bool)
console.log(obj)
