const paidbribe = require('../database/models/paidbribe');

module.exports = (req,res) => {
    paidbribe.create(req.body, (error, data) => {
        if(error) {
            const storingErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('storingErrors', storingErrors)

            req.flash('data', req.body)

            return res.redirect('/paidbribe')
        }
        res.redirect('/')
    })
};

