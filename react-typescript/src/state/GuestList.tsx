import { useState } from 'react'

const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const handleChange = (evt: any) => {
    setName(evt.target.value)
  }

  const handleClick = () => {
    setName('')
    setGuests((allGuestNames) => [...allGuestNames, name])
  }

  return (
    <div>
      <h3>GuestList</h3>
      <input type='text' value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add Guest</button>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </div>
  )
}

export default GuestList
