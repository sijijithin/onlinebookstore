const users= require('../Models/userSchema')

// customer register logic
exports.register = async (req, res) => {
    console.log("Inside Register Function");

    const { username,mobile, password,email } = req.body

    try {
        const result = await users.findOne({ email })
        if (result) {
            res.status(406).json("Account already exsist, please login ")
        }
        else {
            const newUser = new users({
                username, mobile, password, email
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(401).json(err) 

    }


}

// customer login logic

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const bookUser = await users.findOne({ email, password })
        if (bookUser) {
            res.status(200).json( "LoginSuccessfully !!!")
        }
        else {
            res.status(404).json("Invalid Username/Password")
        }
    } catch (err) {
        res.status(401).json(err)

    }
}