// 定义递归类型
type NestedObject<T> = {
    value: T;
    nested?: NestedObject<T>;
};

// 定义一个大型联合类型
type LargeUnionType =
    | 'option1'
    | 'option2'
    | 'option3'
    | 'option4'
    | 'option5'
    | 'option6'
    | 'option7'
    | 'option8'
    | 'option9'
    | 'option10';

// 生成一个复杂的嵌套对象
function generateComplexObject(depth: number): NestedObject<LargeUnionType> {
    if (depth === 0) {
        const randomValue: LargeUnionType = (['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8', 'option9', 'option10'][Math.floor(Math.random() * 10)]) as LargeUnionType;
        return { value: randomValue };
    }
    const nested = generateComplexObject(depth - 1);
    const randomValue: LargeUnionType = (['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8', 'option9', 'option10'][Math.floor(Math.random() * 10)]) as LargeUnionType;
    return { value: randomValue, nested };
}

// 对复杂对象进行一些操作
function processComplexObject(obj: NestedObject<LargeUnionType>): number {
    let count = 0;
    let current: NestedObject<LargeUnionType> | undefined = obj;
    while (current) {
        count++;
        current = current.nested;
    }
    return count;
}

// 生成一个深度为 10 的复杂对象
const complexObj = generateComplexObject(10);

// 处理复杂对象
const result = processComplexObject(complexObj);

console.log(`Processed result: ${result}`);