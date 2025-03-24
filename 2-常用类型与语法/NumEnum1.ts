// 定义一个描述【上下左右】方向的枚举Direction
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction)
/*
Direction输出内容：

{
  '0': 'Up',
  '1': 'Down',
  '2': 'Left',
  '3': 'Right',
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
}

*/

// 反向映射
console.log(Direction.Up)
console.log(Direction[0])

// Direction.Up = 'shang' // 报错，枚举中的属性是只读的