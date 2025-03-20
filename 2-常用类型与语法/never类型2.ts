// 指定类型为string
let Never2: string
// 设置一个值
Never2 = 'hello'

if (typeof Never2 === 'string') {
    console.log(Never2.toUpperCase())
} else {
    console.log(Never2) // TS将会推断此次的Never2为 never，因为没有一个值符合逻辑
}