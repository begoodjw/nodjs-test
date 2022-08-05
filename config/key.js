if(process.env.NODE_ENV === 'production') {
    console.log("get uri from server")
    module.exports = require('./prod')
}else {
    console.log("get uri from local")
    module.exports = require('./dev')
}