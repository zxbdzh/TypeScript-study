const logMessage0 = (msg: string): void => {
    console.log(msg)
}

const logMessage1 = (msg: string): void => {
    console.log(msg)
    return
}

const logMessage2 = (msg: string): void => {
    console.log(msg)
    return undefined
}

logMessage0('test')
logMessage1('test1')
logMessage2('test2')
