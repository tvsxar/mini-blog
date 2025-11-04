import { Link } from 'react-router-dom';

function PostItem() {
  return (
    <Link to='/post/5' className="group max-w-full grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-6 md:gap-10 cursor-pointer items-center">
      <div>
        <img className="w-full h-auto rounded-xl object-cover overflow-hidden"
        src="https://techcrunch.com/wp-content/uploads/2024/06/3.-Clicks-BumbleBee-and-London-Sky.jpg?resize=2048,1365" alt="Post preview" />
      </div>

      <div className="flex flex-col justify-center gap-2 md:gap-4 px-4 md:px-0 pb-4 md:pb-0">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl 
        transition-colors duration-100 group-hover:text-green-600">Full-House Baterry backup coming later this year</h2>

        <div className="text-sm sm:text-base flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black/90 font-semibold">Author Name</p>
            <span className="text-blak">•</span>
            <p className='font-medium text-gray-400'>2025-08-06</p>
        </div>

        <p className="text-md sm:text-lg text-gray-700 leading-relaxed line-clamp-3 md:line-clamp-4 lg:line-clamp-6 xl:line-clamp-7 overflow-hidden text-ellipsis">Greonevnoronubve orebonronboerb eojrboneouhrbouhebhoure bjoierboeourbojeurbe brejoibeohoubre rjooejbroueohubohuebohue
            greonevnoronubve! Orebonronboerb eojrboneouhrbouhebhoure bjoierboeourbojeurbe brejoibeohoubre rjooejbroueohubohuebohue
            greonevnoronubve orebonronboerb eojrboneouhrbouhebhoure bjoierboeourbojeurbe brejoibeohoubre bjoierboeourbojeurbe brejoibeohoubre 
            bjoierboeourbojeurbe brejoibeohoubre rjooejbroueohubohuebohuerjooejbroueohubohuebohuerjooejbroueohubohuebohue 
        </p>
      </div>
    </Link>
  )
}

export default PostItem
