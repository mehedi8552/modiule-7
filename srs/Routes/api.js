const express = require('express');
const router = express.Router();

const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

const {
  create: createcomment,
  read: readcomment,
  delete: deletecomment,
  update: updatecomment,
} = require('../Controllers/commentController');

const {
  create: createmessage,
  read: readmessage,
  delete: deletemessage,
  update: updatemessage,
} = require('../Controllers/messageController');

const {
  create: createportfolio,
  read: readportfolio,
  delete: deleteportfolio,
  update: updateportfolio,
} = require('../Controllers/portfolioController');

const {
  create: createproduct,
  read: readproduct,
  delete: deleteproduct,
  update: updateproduct,
} = require('../Controllers/productController');

// Define routes for blogs
router.get('/blogs/create', createBlog);
router.get('/blogs/read', readBlog);
router.get('/blogs/delete', deleteBlog);
router.get('/blogs/update', updateBlog);

router.get('/comment/create', createcomment);
router.get('/comment/read', readcomment);
router.get('/comment/delete', deletecomment);
router.get('/comment/update', updatecomment);

router.get('/message/create', createmessage);
router.get('/message/read', readmessage);
router.get('/message/delete', deletemessage);
router.get('/message/update', updatemessage);

router.get('/portfolio/create', createportfolio);
router.get('/portfolio/read', readportfolio);
router.get('/portfolio/delete', deleteportfolio);
router.get('/portfolio/update', updateportfolio);

router.get('/product/create', createproduct);
router.get('/product/read', readproduct);
router.get('/product/delete', deleteproduct);
router.get('/product/update', updateproduct);



module.exports = router;


router.use((req, res) => {
    res.status(404).json({ status: 'error', message: 'Not found' });
  });
  