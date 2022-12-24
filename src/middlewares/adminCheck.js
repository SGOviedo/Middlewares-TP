const admin = ['ada','vim','tim','greta','santi'];

module.exports = (req,res,next) => {
    if(admin.includes(req.query.user.toLowerCase())){
        next()
    } else
        res.redirect('/login?error=true')
}
