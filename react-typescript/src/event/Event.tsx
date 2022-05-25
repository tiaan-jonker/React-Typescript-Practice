const Event: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return (
    <div>
      <input type='text' onChange={handleChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me around
      </div>
    </div>
  )
}

export default Event
