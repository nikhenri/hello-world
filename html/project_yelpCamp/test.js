class woof {
    constructor(name) { 
      this.name = name
      console.log(`constructor '${name}'`) 
    }

    sayHi() { 
      console.log(`Fuck off '${this.name}'`)
    }
  }

  module.exports = woof