const logMsg1 = (msg: string): undefined => {
    console.log(msg)
}

let result = logMsg1('你好')

if(result) console.log('logMessage有返回值') // 不报错