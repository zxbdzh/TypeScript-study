let str1: string
str1 = 'hello'
str1.toUpperCase() // 无警告

let str2: any
str2 = 'hello'
str2.toUpperCase() // 无警告

let str3: unknown
str3 = 'hello';
// str3.toUpperCase() // 警告
(str3 as string).toUpperCase() // 断言指定为string则无警告