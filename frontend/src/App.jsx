import AppRouter from "./components/AppRouter"
import UserProvider from './context/UserContext'
import PostsProvider from './context/PostsContext'
import ScrollToTop from "./utils/ScrollToTop"

function App() {

  return (
    <UserProvider>
      <PostsProvider>
        <ScrollToTop />
        <AppRouter />
      </PostsProvider>
    </UserProvider>
  )
}

export default App
