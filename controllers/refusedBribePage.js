module.exports = (req,res) => {
    res.render('refusedBribe', {
        errors: req.flash('storingErrors'),
        data: req.flash('data')[0]
    })
};
