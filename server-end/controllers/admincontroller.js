const admins =require('../Models/userSchema')

// admin Register 
exports.register = async (req, res) => {
    console.log("Inside Register Function");

    const { username,mobile, password,email } = req.body

    try {
        const result = await admins.findOne({ email })
        if (result) {
            res.status(406).json("Account already exsist, please login ")
        }
        else {
            const newAdmin = new admins({
                username, mobile, password, email
            })
            await newAdmin.save()
            res.status(200).json(newAdmin)
        }
    }
    catch (err) {
        res.status(401).json(err) 

    }


}

// Admin login logic

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const bookAdmin = await admins.findOne({ email, password })
        if (bookAdmin) {
            res.status(200).json( "LoginSuccessfully !!!")
        }
        else {
            res.status(404).json("Invalid Username/Password")
        }
    } catch (err) {
        res.status(401).json(err)

    }
}