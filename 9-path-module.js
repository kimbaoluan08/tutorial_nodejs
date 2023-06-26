const path = require('path')
// console.log(path.sep)

const filePath = path.join('/item/', 'sub_item', 'test.txt')
console.log(filePath)

const filePath_1 = path.join(__dirname, '/item/', 'sub_item', 'test.txt')
console.log(filePath_1)

// const absolute = path.resolve(__dirname,'item', 'sub_item', 'test')
// console.log(absolute)

// const absolute_1 = path.resolve(__dirname)
// console.log(__dirname)

