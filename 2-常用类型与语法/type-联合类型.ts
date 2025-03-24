type Status = number | string
type Gender = '男' | '女'

const printStatus = (status: Status): void => {
    console.log(status)
}

const logGender = (str: Gender): void => {
    console.log(str)
}

printStatus(404)
printStatus('200')
printStatus('501')
// printStatus(true) // 报错

logGender('男')
logGender('女')
// logGender('a') // 报错