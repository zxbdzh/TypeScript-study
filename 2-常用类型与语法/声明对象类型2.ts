// 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
let person: { name: string; age: number; gender: string }

// 赋值合法
person = {
    name: '张三',
    age: 18,
    gender: '男'
}