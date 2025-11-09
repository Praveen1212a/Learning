//const input = "aabbcdeff";  First Non-Repeating Character.
//const input = [1, 2, 3, 2, 4, 1, 5];
//
const input = "geremany";  // First Repeating Character.
let result = "";
// method 1
for (let c of input) {
    if(!result.includes(c)){
        result += c;
    }
}
console.log(result); // Output: "germany"
// method 2
const result2 = [...new Set(input)].join('');
console.log(result2); // Output: "germany"



// flatten array
const arr = [1, [2, [3, 4], 5], 6];
// Output: [1, 2, 3, 4, 5, 6]
// using recursion
function flatternArray(arr){
    let result =[];
    for (let item of arr) {
        if(Array.isArray(item)){
result = result.concat(flatternArray(item));
        }else{
            result.push(item);
        }
    }
    return result;
}
// using flatternArray
console.log(arr.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6]
// using reduce

function flattenArrayReduce(arr) {
    return arr.reduce((acc, item) => {
       return acc.concat(Array.isArray(item) ? flattenArrayReduce(item) : item);
    }, []);
}