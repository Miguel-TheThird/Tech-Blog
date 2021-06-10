const router = require('express').Router();
//const { Gallery, Painting } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  res.render('login')
});

router.get('/post', async (req, res) => {
  res.render('createPost')
});
  
  


module.exports = router;
