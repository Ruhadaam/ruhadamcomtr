const express = require('express');
const router = express.Router();

const path = require('path');

router.use('/dreams', (req, res) => {
    res.render("pages/dreams");
});
router.use('/projects', (req, res) => {
    res.render("pages/myprojects");
});
router.use('/about', (req, res) => {
    res.render("pages/aboutme");
});

router.use('/', (req, res) => {
    res.render("pages/index");
});


module.exports = router;