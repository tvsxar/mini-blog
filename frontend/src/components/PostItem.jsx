import { Link } from 'react-router-dom';

function PostItem({ post }) {
  const { title, summary, imageUrl, createdAt, username, _id } = post;
  
  return (
    <Link to={`/post/${_id}`} className="group max-w-full grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-6 md:gap-10 cursor-pointer items-center">
      <div>
        <img className="w-full h-auto rounded-xl object-cover overflow-hidden"
        src={`${imageUrl}`} alt="Post preview" />
      </div>

      <div className="flex flex-col justify-center gap-2 md:gap-4 px-4 md:px-0 pb-4 md:pb-0">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl 
        transition-colors duration-100 group-hover:text-green-600">{title}</h2>

        <div className="text-sm sm:text-base flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black/90 font-semibold">{'@' + username}</p>
            <span className="text-blak">•</span>
            <p className='font-medium text-gray-400'>{new Date(createdAt).toLocaleDateString()}</p>
        </div>

        <p className="text-md sm:text-lg text-gray-700 leading-relaxed line-clamp-3 md:line-clamp-4 lg:line-clamp-6 xl:line-clamp-7 overflow-hidden text-ellipsis">
            {summary} 
        </p>
      </div>
    </Link>
  )
}

export default PostItem
