const Post = require('../models/postModel');
const uploadToCloudinary = require('../utils/cloudinary');

// Controller for getting all posts
async function getAllPosts(req, res) {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });

        res.status(200).json({message: 'Posts retrieved', posts});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

// Controller for adding new post
async function addPost(req, res) {
    try {
        const { title, summary, content } = req.body;

        if (!title || !summary || !content) {
            return res.status(400).json({ message: "Title, summary and content are required" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const result = await uploadToCloudinary(req.file.buffer);

        let newPost = await Post.create({
            title, 
            summary,
            content,
            imageUrl: result.secure_url,
            userId: req.user._id,
            username: req.user.username
        });

        res.status(201).json({ message: 'Post created', post: newPost })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

// Controller for getting post
async function getPost(req, res) {
    try {
        const post = await Post.findById(req.params.id);

        if(!post) return res.status(404).json({ message: "Post not found" });

        res.status(200).json({ message: 'Post retrieved', post })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

// Controller for deleting post
async function deletePost(req, res) {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        // Check if post exists
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted', post: deletedPost })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

// Controller for editing post
async function editPost(req, res) {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) return res.status(404).json({ message: "Post not found" });

        // Check if user allowed to edit this post
        if (post.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not allowed to edit this post" });
        }

        const { title, summary, content } = req.body;

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "miniBlogPosts"
            });
            post.imageUrl = result.secure_url;
        }

        post.title = title || post.title;
        post.summary = summary || post.summary;
        post.content = content || post.content;

        await post.save();

        res.status(200).json({ message: "Post updated", post })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = {
    getAllPosts,
    addPost,
    getPost,
    deletePost,
    editPost
}