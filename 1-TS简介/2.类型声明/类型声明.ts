let a: string // 变量a只能存储字符串
let b: number // 变量b只能存储数值
let c: boolean // 变量c只能存储布尔值

a = 'hello'
// a = 100 // 类型声明.ts:6:1 - error TS2322: Type 'number' is not assignable to type 'string'.

b = 666
// b = '你好' // 类型声明.ts:9:1 - error TS2322: Type 'string' is not assignable to type 'number'.

c = true
// c = 666 // 类型声明.ts:12:1 - error TS2322: Type 'number' is not assignable to type 'boolean'.

let d = '123'
// d = false

const demo = (x: number, y: number):number => {
    // return 'abc' // 类型声明.ts:15:5 - error TS2322: Type 'string' is not assignable to type 'number'.
    return x + y
}

console.log(demo(100, 200))
// console.log(demo(100, '200')) // 报错
// console.log(demo(100)) // An argument for 'y' was not provide