exports.get_landing = function(req,res,next){
    res.render('index',{title:'Demo'});
}
exports.submit_form = function(req,res,next){
    console.log("email",req.body.lead_email);
   // alert("email",req.body.lead_email);
    res.redirect('/');
}
