const express = require('express');
const asyncHandler = require('express-async-handler');
const { Cocktail } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const cocktails = await Cocktail.findAll();
    // console.log(cocktails)
    return res.json(cocktails);
}));

module.exports = router;