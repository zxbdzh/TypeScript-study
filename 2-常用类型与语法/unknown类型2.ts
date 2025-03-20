// 设置a的类型为unknown
let u1: unknown
let un;
u1 = 'hello'

// 第一种方式: 加类型判断
if (typeof u1 === 'string') {
    un = u1
    console.log(un)
}

// 第二种方式：加断言
un = u1 as string
console.log(un)

// 第三种方式：加断言
un = <string>u1
console.log(un)