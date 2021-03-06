import { useState, useRef, useEffect } from 'react'

const users = [
  { name: 'Tiaan', age: 29 },
  { name: 'Nicole', age: 27 },
  { name: 'Ozzy', age: 127 },
]

type SearchStates = {
  name: string | undefined
  age: number | undefined
}

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [search, setSearch] = useState('')
  const [user, setUser] = useState<SearchStates>()

  useEffect(() => {
    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleClick = () => {
    const foundUser = users.find((user) => {
      return user.name === search
    })
    setUser(foundUser)
    console.log(foundUser)
  }

  return (
    <div>
      <h3>User Search</h3>
      <input
        type='text'
        ref={inputRef}
        value={search}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
      <div>
        {user && user.name} {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
