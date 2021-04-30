const express = require('express');
const asyncHandler = require('express-async-handler');
const { Cocktail, Comment, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const cocktails = await Cocktail.findAll({
        include: {
            model: Comment,
            include: {
                model: User
            },
        },
        order: [['name', 'ASC'], [Comment, 'createdAt', 'ASC']],

    });
    // console.log(cocktails)
    return res.json(cocktails);
}));

router.post('/comments', requireAuth, asyncHandler(async (req, res) => {
    // console.log('backend', req.body);
    const { content, cocktailId, userId } = req.body;
    const newComment = await Comment.create({
        content,
        cocktailId,
        userId,
    })

    // console.log(newComment)
    return res.json(newComment);
}))

module.exports = router;