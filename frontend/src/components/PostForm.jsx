import { Link } from 'react-router-dom';

function PostForm({ isEditing, handleSubmit, handleChangeFormData, postFormData }) {
  return (
    <div className="flex flex-col items-center">
      {/* Top line */}
      <div className="w-full max-w-4xl flex sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-3">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
          {isEditing ? 'Edit Post' : 'Create New Post'}
        </h1>

        <Link
          to="/"
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base">
          ← Back to posts
        </Link>

      </div>

      {/* Form */}
      <div className="w-full max-w-4xl border border-gray-300 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">

        <form onSubmit={handleSubmit}
        className="flex flex-col gap-6 sm:gap-8">

          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm sm:text-base font-medium">Title</label>
            <input
              type="text"
              name='title'
              value={postFormData.title}
              onChange={handleChangeFormData}
              placeholder="Enter post title..."
              className="bg-gray-200 border border-gray-300 
                          rounded-xl p-2.5 sm:p-3 focus:outline-none focus:shadow-md"
            />
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm sm:text-base font-medium">Summary</label>
            <input
              type="text"
              name='summary'
              value={postFormData.summary}
              onChange={handleChangeFormData}
              placeholder="Enter short summary..."
              className="bg-gray-200 border border-gray-300 
                          rounded-xl p-2.5 sm:p-3 focus:outline-none focus:shadow-md"
            />
          </div>

          {/* Image */}
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm sm:text-base font-medium">Image</label>
            <input
              type="file"
              name='image'
              accept="image/*" 
              onChange={handleChangeFormData}
              className="text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 
                         file:text-sm sm:file:text-base file:font-semibold file:bg-green-600 file:text-white 
                         hover:file:bg-green-700 max-w-[250px] sm:max-w-[300px] cursor-pointer"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm sm:text-base font-medium">Content</label>
            <textarea
              rows="8"
              name='content'
              value={postFormData.content}
              onChange={handleChangeFormData}
              placeholder="Write your post content here..."
              className="bg-gray-200 border border-gray-300 rounded-xl p-2.5 sm:p-3 
                         focus:outline-none focus:shadow-md resize-none transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold 
                        py-2.5 sm:py-3 rounded-xl transition text-sm sm:text-base w-full 
                        sm:w-auto px-8 self-center sm:self-end cursor-pointer"
          >
            {isEditing ? 'Save Changes' : 'Create Post'}
          </button>

        </form>

      </div>
    </div>
  )
}

export default PostForm
