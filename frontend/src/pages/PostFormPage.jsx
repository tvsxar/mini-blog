import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { PostsContext } from '../context/PostsContext';
import PostForm from '../components/PostForm';

function PostFormPage() {
  const { id } = useParams();
  const isEditing = Boolean(id);

  // Navigate
  const navigate = useNavigate();

  // Context
  const { createPost, currentPost, fetchCurrentPost, updatePost, postLoading, postError } = useContext(PostsContext);

  const [postFormData, setPostFormData] = useState({
    title: '',
    summary: '',
    content: '',
    image: null
  })

  useEffect(() => {
    if(isEditing) {
      if(!currentPost || currentPost._id !== id) {
        fetchCurrentPost(id)
      } else {
        setPostFormData({
          title: currentPost.title,
          summary: currentPost.summary,
          content: currentPost.content,
          image: null
        });
      }
    }
  }, [currentPost, id, isEditing])

  function handleChangeFormData(e) {
    const { value, files, name } = e.target;

    setPostFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Create formData obj to send to API
    const formData = new FormData();
    formData.append('title', postFormData.title);
    formData.append('summary', postFormData.summary);
    formData.append('content', postFormData.content);
    formData.append('image', postFormData.image);

    if(isEditing) {
      const updatedPost = await updatePost(currentPost._id, formData);

      if(updatedPost) navigate('/post/' + updatedPost._id)
    } else {
      const newPost = await createPost(formData);

      if(newPost) navigate('/post/' + newPost._id)
    }
  }

  if (postLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading data...</p>
      </div>
    );
  }

  {postError && (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
      {postError}
    </div>
  )}

  return (
    <div 
    className='min-h-[80v] text-black px-4 
    sm:px-6 md:px-10 py-20 md:py-16'>
      <PostForm
      isEditing={isEditing}
      handleSubmit={handleSubmit}
      postFormData={postFormData}
      handleChangeFormData={handleChangeFormData} />
    </div>
  )
}

export default PostFormPage
