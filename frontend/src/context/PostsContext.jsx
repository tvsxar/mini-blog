import { createContext, useState, useEffect } from 'react';
import api from '../utils/api';

const PostsContext = createContext(null);

function PostsProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState({});
    const [postError, setPostError] = useState(null);
    const [postLoading, setPostLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, [])

    async function fetchPosts() {
        try {
            setPostLoading(true);
            setPostError(null);

            const { data } = await api.get('/api/posts');

            if(!data.posts) {
                setPostError("Error getting posts!")
            }

            setPosts(data.posts);
        } catch (error) {
            console.error(error);
            setPostError("Something went wrong, please try again.")
        } finally {
            setPostLoading(false);
        }
    }

    async function fetchCurrentPost(currentId) {
        try {
            setPostLoading(true);
            setPostError(null);

            const { data } = await api.get('/api/posts/' + currentId);

            if(!data.post) {
                setPostError("Error getting post!")
            }

            setCurrentPost(data.post);
        } catch (error) {
            console.error(error);
            setPostError("Something went wrong, please try again.")
        } finally {
            setPostLoading(false);
        }
    }

    async function createPost(formData) {
        try {
            setPostLoading(true);
            setPostError(null);

            const { data } = await api.post('/api/posts', formData);

            if(!data.post) {
                setPostError("Error creating new post!");
            }

            setPosts(prev => [data.post, ...prev]);
            return data.post;
        } catch (error) {
            console.error(error);
            setPostError("Something went wrong, please try again.")
        } finally {
            setPostLoading(false);
        }
    }

    async function deletePost(postId) {
        try {
            setPostLoading(true);
            setPostError(null);

            const { data } = await api.delete('/api/posts/' + postId);

            if(!data.post) {
                setPostError("Error deleting new post!");
            }

            setPosts(prev => prev.filter(post => post._id !== postId));
            return true;
        } catch (error) {
            console.error(error);
            setPostError("Something went wrong, please try again.")
            return false;
        } finally {
            setPostLoading(false);
        }
    }

    async function updatePost(postId, formData) {
        try {
            const { data } = await api.put('/api/posts/' + postId, formData);

            if(!data.post) {
                setPostError("Error updating new post!");
            }

            setPosts(prev => prev.map(post => postId === post._id ? data.post : post));
            return data.post;
        } catch (error) {
            console.error(error);
            setPostError("Something went wrong, please try again.")
        } finally {
            setPostLoading(false);
        }
    }

    return (
        <PostsContext.Provider value={{
            posts, setPosts,
            postError, setPostError,
            postLoading, setPostLoading,
            currentPost, setCurrentPost,
            fetchCurrentPost, createPost,
            deletePost, updatePost
        }}>
            {children}
        </PostsContext.Provider>
    )
}

export { PostsContext };
export default PostsProvider;