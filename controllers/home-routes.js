const router = require('express').Router();
const { User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  res.render('homepage' , {loggedIn : req.session.loggedIn})
});

router.get('/login', async (req, res) => {
  res.render('login')
});

router.get('/posts', async (req, res) => {
  res.render('posts')
});
  
  


module.exports = router;
