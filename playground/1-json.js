const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
let dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name = 'Tim'
user.age = 58
dataJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', dataJSON)