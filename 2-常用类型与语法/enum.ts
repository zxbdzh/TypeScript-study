const walk = (str: string):void => {
    if (str === 'up') console.log('向【上】走')
    else if (str === 'down') console.log('向【下】走')
    else if (str === 'left') console.log('向【左】走')
    else if (str === 'right') console.log('向【右】走')
    else console.log('未知方向')
}

walk('up')
walk('down')
walk('left')
walk('right')