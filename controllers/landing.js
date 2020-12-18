const models = require('../models');
exports.get_landing = function(req,res,next){
    res.render('index',{title:'Demo'});
}
exports.submit_form = function(req,res,next){
    console.log("email",req.body.lead_email);
    return models.Lead.create({
        email:req.body.lead_email
    }).then(lead =>{
        res.redirect('/');
    })
   // alert("email",req.body.lead_email);

}
