const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const protect = require('../middleware/protectMiddleware');
const { 
    getPost,
    getAllPosts,
    addPost,
    editPost,
    deletePost
} = require('../controllers/postController');

// Get all posts
router.get('/', getAllPosts)

// Create new post
router.post('/', protect, upload.single('image'), addPost);

// Get post by id
router.get('/:id', getPost);

// Delete post by id
router.delete('/:id', protect, deletePost);

// Edit post by id
router.put('/:id', protect, upload.single('image'), editPost);

module.exports = router;