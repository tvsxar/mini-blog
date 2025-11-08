import AppRouter from "./components/AppRouter"
import UserProvider from './context/UserContext'

function App() {

  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  )
}

export default App
