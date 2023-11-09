const books = require('../Models/bookSchema')

// create book
exports.createbook = async (req, res) => {
    console.log("inside creatbook");
    const { name, author, category, publishedyear } = req.body
    try {
        const book = await books.findOne({ name })
        if (book) {
            res.status(406).json("Book Already exsist")
        }
        else {
            const newbook = new books({
                name, author, category, publishedyear
            })
            await newbook.save()
            res.status(200).json(` Book ${name} created successfully`)
        }

    } catch (error) {
        res.status(401).json(error)
    }
}

// edit book

exports.editbook = async (req, res) => {
    const { _id } = req.params

    try {
        const result = await books.findByIdAndUpdate({ _id }, req.body, { new: true })
        if (!result) {
            res.status(404).json("No Book Details Available !!!")
        } else {
            const updatedBook = await books.findById(_id)
            res.status(200).json(updatedBook)
        }

    } catch (error) {
        res.status(401).json(error)
    }
}

// getallbook

exports.getallbooks = async (req, res) => {

    try {
        const allbook= await books.find()
        res.status(200).json(allbook)
    } catch (error) {
        res.status(401).json(error)
    }
}

// delete book

exports.deletebook=async(req,res)=>{
    const {_id}=req.params
    try {
        await books.deleteOne({_id})     
        res.status(200).json("Book deleted successfully")
         
    } 
    catch(error) {
      res.status(401).json(error)  
    }
}