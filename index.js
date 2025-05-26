const express = require("express")
const path = require("path")
const app = express();
const fs = require("fs")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public'))) // ye madad krta he frontend file like html css js and jo bhi asset hoga use chalane me

app.set('view engine', 'ejs')

app.get("/", function(req, res){
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files: files})
    })
})
app.get("/file/:filename", function(req, res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8", function(err, filedata){
        res.render('show', {filename: req.params.filename, filedata:filedata})
    })
})

app.get("/edit/:filename", function(req, res){
    res.render('edit', {filename: req.params.filename})
})

app.post("/edit", function(req, res){
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect("/")
    })
})

app.post("/create", function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}`, req.body.details, function(err){
        res.redirect("/")
    })
})

app.post("/delete/:filename", function(req, res){
    fs.unlink(`./files/${req.params.filename}`, function(err){
        if (err) {
            console.error(err);
        }
        res.redirect("/");
    });
});

// app.get("/profile/:abc", function(req, res){
//     res.send(`welcome, ${req.params.abc}`)
// })
// app.get("/profile/:username/:age", function(req, res){
//     res.send(`welcome, ${req.params.username} of age ${req.params.age}`)
// })

app.listen(3000, function(){
    console.log("It's running")
})