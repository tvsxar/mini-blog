import { Link } from 'react-router-dom';

function PostInfo({ isCurrentUser, currentPost, handleDelete, postError }) {
  return (
    <>
    <div className="w-full max-w-4xl flex sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-3">
        <Link
            to="/"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base">
            ← Back to posts
        </Link>
    </div>

    {postError && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
        {postError}
      </div>
    )}

    <div className="flex flex-col gap-8 items-center">

        {/* Title */}
        <h2 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
            {currentPost.title}
        </h2>

        {/* Author & date */}
        <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className='font-medium text-sm text-gray-400'>{new Date(currentPost.createdAt).toLocaleDateString()}</p>

            <p className="text-black/90 text-sm sm:text-md font-semibold">by @{currentPost.username}</p>
        </div>

        {/* Buttons */}
        {isCurrentUser &&
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button className="bg-green-600 hover:bg-green-700 text-white 
            font-semibold py-2 px-4 rounded-lg transition cursor-pointer">
                <Link to={'/post/edit/' + currentPost._id}>Edit</Link>
            </button>
            <button onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white 
            font-semibold py-2 px-4 rounded-lg transition cursor-pointer">
                Delete
            </button>
        </div>}

        {/* Image */}
        <div className="w-full flex justify-center">
            <img className="rounded-xl max-w-full w-full sm:w-auto border border-gray-300 h-auto shadow-lg object-cover"
            src={currentPost.imageUrl} alt="Image" />
        </div>
         
        {/* Summary */}
        <p className="text-md text-xl sm:text-2xl text-gray-700 mb-4 font-medium text-center sm:text-left leading-relaxed">{currentPost.summary}</p>

        {/* Content */}
        <p className="text-md sm:text-lg text-gray-700 text-justify leading-relaxed">{currentPost.content}</p>
    </div>
    </>
  )
}

export default PostInfo
