import UserContextProvider  from './context/UserContext';
import UserTable from './components/UsersTable'

function App() {
  return (
    <UserContextProvider>
      <UserTable />
    </UserContextProvider>
  )
}

export default App