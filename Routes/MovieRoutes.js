const {Router} = require('express');
const {MovieModel} = require('../Models/Movies.model')

// Middlewares
const {Authentication} = require('../Middlewares/Authentication')
const {Authorization} = require('../Middlewares/Authorization')

const MovieRouter = Router();

// All movies route
MovieRouter.get('/',Authentication,async(req,res)=>{
    try {
        const Movies = await MovieModel.find({});
        res.status(200).send({'Movies':Movies});
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Error while getting movies'});
    }
})

// Single movie route
MovieRouter.get('/:id',Authentication,async(req,res)=>{
    const {id} = req.params;
    try {
        const Movies = await MovieModel.findOne({_id:id});
        res.status(200).send({'Movie':Movies});
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Error while getting movies'});
    }
})

// Add movie route
MovieRouter.post('/create',Authentication,Authorization,async(req,res)=>{
    const {Name,Posters,Ratings,Category,Description} = req.body;
    // console.log(Name,Posters,Ratings,Category,Description);
    if(!Name || !Posters || !Ratings || !Category || !Description){
        res.status(206).send({'Message':'All fields are required'})
        return
    }
    try {
        const New_Movie = new MovieModel({
            Name,
            Posters,
            Ratings,
            Category,
            Description
        });
        await New_Movie.save();
        res.status(201).send({'Message':'Movie added','Movie':New_Movie});
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Error while creating movie'});
    }
})

// Update movie route
MovieRouter.patch('/update/:id',Authentication,Authorization,async(req,res)=>{
    const Data = req.body;
    const {id} = req.params;
    try {
        const Movie = await MovieModel.findOneAndUpdate({_id:id},Data,{new:true});
        res.status(200).send({'Message':'Movie updated','Movie':Movie});
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Error while updating the data'});
    }
})

// Delete movie route
MovieRouter.delete('/delete/:id',Authentication,Authorization,async(req,res)=>{
    const {id} = req.params;
    try {
        const Movie = await MovieModel.findOneAndDelete({_id:id});
        res.status(200).send({'Message':'Movie deleted','Movie':Movie});
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Error while deleting the data'});
    }
})

module.exports = {
    MovieRouter
}