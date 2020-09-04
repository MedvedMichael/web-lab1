
const arr = num => Array.from({ length: num }, (v, k) => k)
const canBeDivided = (a, b, c) => (b !== 0 && c !== 0 && a % b === 0 && a % c === 0)
const capitalize = line => line[0].toUpperCase() + line.slice(1)


console.log(arr(5))
console.log(canBeDivided(15,0,0))
console.log(capitalize('kukusiki'))