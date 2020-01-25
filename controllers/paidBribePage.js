module.exports = (req,res) => {
    console.log(req.flash('storingErrors'))
    res.render('paidBribe', {
        errors: req.flash('storingErrors'),
        data: req.flash('data')[0]
    })
};
