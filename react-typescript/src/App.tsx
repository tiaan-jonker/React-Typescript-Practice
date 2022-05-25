import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch'
import Event from './event/Event'

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <Event />
    </div>
  )
}

export default App
