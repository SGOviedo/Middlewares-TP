const { query } = require("express")

module.exports = {
    index : (req,res) => {
        return res.render('index')
    },
    contact : (req,res) => {
        return res.render('contact')
    },
    about : (req,res) => {
        return res.render('about')
    },    
    services : (req,res) => {
        return res.render('services')
    },
    admin : (req,res) => {
        return res.render('admin',{
            user: req.query.user
        })
    },
    login : (req,res) => {
        return res.render('login',{
            msg:req.query.error ? "No tienes previlegios para ingresar" : null
        })
    }
}