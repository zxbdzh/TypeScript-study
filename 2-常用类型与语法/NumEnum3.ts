enum Direction {
    // @ts-ignore
    Up,
    // @ts-ignore
    Down,
    // @ts-ignore
    Left,
    // @ts-ignore
    Right
}

// @ts-ignore
const walk = (n: Direction): void => {
    if (n === Direction.Up) console.log("向【上】走")
    else if (n === Direction.Down) console.log("向【下】走")
    else if (n === Direction.Left) console.log("向【左】走")
    else if (n === Direction.Right) console.log("向【右】走")
    else console.log("未知方向")
}

// @ts-ignore
walk(Direction.Up)
// @ts-ignore
walk(Direction.Down)
