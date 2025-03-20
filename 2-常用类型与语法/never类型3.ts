const throwError= (str: string): never => {
    throw new Error('程序异常退出: ' + str )
   // return // 警告
}