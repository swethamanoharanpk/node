const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {
    console.log("first", req.headers.token);
    console.log("second", req.params.id);
    try {
        const accessToken = req.headers.token

        if (accessToken) {
            jwt.verify(accessToken, process.env.jwtsecretkey, (err, data) => {
                if (err) {
                    return res.status(401).json("token not authorized")
                }
                    if (req.params.id == data.id) {
                        next()
                    } else {
                        return res.status(401).json("user and token not matched")
                    }
                }
                

            )
        } else {
            return res.status(401).json("token not found")
        }

    } catch (err) {
        return res.status(500).json(err)
    }
}
module.exports = verifyToken


               