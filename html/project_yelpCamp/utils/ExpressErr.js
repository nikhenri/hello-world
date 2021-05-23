class ExpressErr extends Error {
    constructor(msg, code) {
        super()
        this.message = msg
        this.statusCode = code
    }
}
module.exports = ExpressErr