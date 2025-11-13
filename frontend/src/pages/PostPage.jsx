import { useContext, useEffect } from 'react';
import { PostsContext } from '../context/PostsContext';
import { UserContext } from '../context/UserContext';
import { useParams, useNavigate } from 'react-router-dom';
import PostInfo from '../components/PostInfo';

function PostPage() {
  // Context & id from params
  const { currentPost, fetchCurrentPost, postLoading, deletePost } = useContext(PostsContext);
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const isCurrentUser = user && currentPost && user._id === currentPost.userId;

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    fetchCurrentPost(id);
  }, [id])

  async function handleDelete(e) {
    e.preventDefault();

    const success = await deletePost(currentPost._id);

    if(success) {
        navigate('/');
    }
  }

  if (postLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading post...</p>
      </div>
    );
  }

  return (
    <div 
    className="px-4 sm:px-6 md:px-12 lg:px-24 
    xl:px-32 py-8 sm:py-12 max-w-xl sm:max-w-3xl 
    md:max-w-4xl lg:max-w-7xl mx-auto">
        <PostInfo 
        isCurrentUser={isCurrentUser}
        currentPost={currentPost}
        handleDelete={handleDelete} />
    </div>
  )
}

export default PostPage
