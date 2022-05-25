import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch'
import UserSearchRef from './refs/UserSearchRef'
import Event from './event/Event'

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <Event />
      <p>Ref input</p>
      <UserSearchRef />
    </div>
  )
}

export default App
