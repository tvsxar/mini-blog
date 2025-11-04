import PostItem from '../components/PostItem'

function HomePage() {
  return (
    <div className='px-4 sm:px-12 lg:px-25 xl:px-25'>
      <div className="flex flex-col gap-16 sm:gap-16 py-8 sm:py-12">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  )
}

export default HomePage
