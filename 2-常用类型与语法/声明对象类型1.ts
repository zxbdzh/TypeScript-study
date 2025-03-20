// 限制person1对象必须有name属性, age为可选属性
let person1: { name: string, age?: number }

// 含义同上, 也能用分号做分隔
let person2: { name: string; age?: number }

// 含义同上, 也能用换行做分隔
let person3: {
    name: string
    age?: number
}

// 以下赋值均可
person1 = { name: 'lisi', age: 18 }
person2 = { name: 'zhangsan' }

// 如下赋值不合法
// person3 = { name: 'wangwu', gender: '男'}