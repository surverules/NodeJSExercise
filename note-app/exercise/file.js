
const fs = require('fs');
const dataObj = {
    name: "sachin",
    age: 20
}
const dataJson = JSON.stringify(dataObj);
console.log(dataJson)
fs.writeFileSync("1-JSON.json", dataJson.toString())

const data = fs.readFileSync("1-JSON.json")

const dataRecreate = JSON.parse(data);

dataRecreate.name = "Pravin"
dataRecreate.age = 30

fs.writeFileSync("1-JSON.json", JSON.stringify(dataRecreate).toString())

