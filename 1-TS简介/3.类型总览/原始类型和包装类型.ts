let str1: string
str1 = 'hello'
// str1 = new String('hello') // 报错 error TS2322: Type 'String' is not assignable to type 'string'.'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.

let str2: String
str2 = 'hello'
str2 = new String('hello')

console.log(typeof str1)
console.log(typeof str2)