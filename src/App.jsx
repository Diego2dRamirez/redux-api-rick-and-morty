import { useEffect } from "react";
import { useSelector } from "react-redux"


function App() {
  const data = useSelector(state => state.data)

  console.log(data);

  return (
    <>
      <h1>Api Rick and Morty</h1>
    </>
  )
}

export default App
