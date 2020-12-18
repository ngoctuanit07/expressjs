const models = require('../models');
exports.get_landing = function (req, res, next) {
    res.render('index', {title: 'Demo'});
}
exports.submit_form = function (req, res, next) {
    console.log("email", req.body.lead_email);
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/leads');
    })
    // alert("email",req.body.lead_email);

}
exports.show_leads = function (req, res, next) {
    return models.Lead.findAll().then(leads => {
        res.render('landing', {title: 'Demo', leads: leads});
    })

}
exports.show_lead = function (req, res, next) {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id,
        }
    }).then(lead => {
        res.render('lead', {lead: lead})
    })

}
