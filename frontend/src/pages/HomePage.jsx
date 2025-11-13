import PostItem from '../components/PostItem'
import { useState, useContext } from 'react';
import { PostsContext } from '../context/PostsContext';

function HomePage() {
  // Context
  const { posts } = useContext(PostsContext);

  return (
    <div className='px-4 sm:px-12 lg:px-25 xl:px-25'>
      <div className="flex flex-col gap-16 sm:gap-16 py-8 sm:py-12">
        {posts.map(post => <PostItem key={post._id} post={post} />)}
      </div>
    </div>
  )
}

export default HomePage
