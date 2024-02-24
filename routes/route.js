const express = require('express');
const router = express.Router();

const path = require('path');

router.use('/dreams', (req, res) => {
    const data = {
        value: "template/home",
        title: "Ana Sayfa"
      };
    res.render("pages/index",data);
});
router.use('/projects', (req, res) => {
    res.render("pages/myprojects");
});
router.use('/about', (req, res) => {
    res.render("pages/aboutme");
});

router.use('/', (req, res) => {
    const data = {
        value: "home",
        title: "Ana Sayfa"
      };
    res.render("pages/index",data);
});


module.exports = router;