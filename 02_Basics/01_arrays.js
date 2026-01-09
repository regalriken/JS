let arr1 = [11,22,33,44,55,66,77,88,99]
arr2 = arr1.splice(1,6)

console.log(arr1)
console.log(arr2)

let arr6 = [11,22,33,44,55,66,77,88,99]
arr7 = arr6.slice(1,3)

console.log(arr6)
console.log(arr7)


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [11, 22, 33, [44, 55, 66], 77, [66, 77, [44, 55]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);