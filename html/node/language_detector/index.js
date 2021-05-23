console.log("hey");

const franc = require("franc")
const langs = require("langs")

// verif require
console.dir(franc)
console.dir(langs)

// print arg
console.log(`aggg => `, process.argv[2]);

// check all match
all = franc.all(process.argv[2])
console.log(all)

code = franc(process.argv[2])
console.log(code)


console.log(langs.where("3", code))



console.log("done");