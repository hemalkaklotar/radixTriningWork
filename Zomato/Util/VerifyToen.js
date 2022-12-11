let jwt = require("jsonwebtoken")
function verifyToken(req, res, next) {
       console.log("HELLo")
       let headerToken = req.headers.authorization
       let JWTSECRETEKEY = process.env.JWT_SECREATE_KEY

       jwt.verify(headerToken, JWTSECRETEKEY, (err, data) => {
              if (err) {
                     console.log("Something want Wrong ")
              }
              else {
                     req.data = data
                     console.log(req.data)
                     next()
              }
       })


}
module.exports = { verifyToken }