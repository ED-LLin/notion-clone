const Note = require('../models/Notes');
const mongoose = require('mongoose');


// get dashboard
exports.dashboard = async (req, res) => {

    let perPage = 12;
    let page = req.query.page || 1;

    const locals = {
        userName: req.user.firstName,
        title: "Dashboard", 
        description: "Free NodeJS Notes App."
    };

    try{

        // console.log("Data inserted");
       const notes = await Note.aggregate([
        { $sort:  { updatedAt: -1 } },
        { $match: {user: mongoose.Types.ObjectId(req.user.id) } },
        {
            $project:{
                title: { $substr: ["$title", 0, 30]},
                body: { $substr: ["$body", 0, 100]},
            },
        }
       ])
       .skip(perPage * page - perPage)
       .limit(perPage)
       .exec();

       const count = await Note.countDocuments();

       res.render('dashboard/index', {
        userName: req.user.firstName,
        locals,
        notes,
        layout: "../views/layouts/dashboard",
        current: page,
        pages: Math.ceil(count / perPage)
       });

    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }

};

// Get, View Specific Note

exports.dashboardViewNote = async (req, res) => {
    const note = await Note.findById({ _id: req.params.id })
      .where({ user: req.user.id })
      .lean();
  
    if (note) {
      res.render("dashboard/view-notes", {
        noteID: req.params.id,
        note,
        layout: "../views/layouts/dashboard",
      });
    } else {
      res.send("Something went wrong.");
    }
  };

// Put, Update specific note     
  

exports.dashboardUpdateNote = async (req, res) => {
  try {
    await Note.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, body: req.body.body, updatedAt: Date.now() }
    ).where({ user: req.user.id });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

// DELETE, Delete Note
exports.dashboardDeleteNote = async (req, res) => {
    try{
        // 原本 code
        // await  Note.deleteOne({_id: req.params.id}.where({user: req.user.id}));
        await Note.deleteOne({_id: req.params.id, user: req.user.id});
        res.redirect('/dashboard');
    } catch(error) {
        console.log(error);
    }
}

// GET, Add Note
exports.dashboardAddNote = async(req, res) => {
    res.render('dashboard/add', {
        layout: '../views/layouts/dashboard'
    })
}

// POST Submit note

exports.dashboardAddNoteSubmit = async(req, res) => {
    try{
        req.body.user = req.user.id;
        await Note.create(req.body);
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
}

// GET Search
exports.dashboardSearch = async(req, res) => {
    try {
        res.render('dashboard/search', {
            searchResults: '',
            layout: '../views/layout/dashboard'
        })
    } catch(error){

    }
}

// POST Search Submit
exports.dashboardSearchSubmit = async(req, res) => {
    try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialsChars = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
        const searchResults = await Note.find({
            $or: [
                { title: {$regex: new RegExp(searchNoSpecialsChars, 'i')}},
                { body: {$regex: new RegExp(searchNoSpecialsChars, 'i')}},
            ]
        }).where ({user: req.user.id});

        res.render('dashboard/search', {
            searchResults,
            layout: '../views/layouts/dashboard'
        });
    } catch(error){
        console.log(error);
    }
}