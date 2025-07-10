import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addData } from "./features/data/dataSlice";


function App() {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()
  const [load, setLoad] = useState(true)

  useEffect(() => {

    async function addInfo() {
      const response = await fetch("https://rickandmortyapi.com/api/character/?page=1")
      const info = await response.json();
      dispatch(addData(info.results))
    }
    setTimeout(() => {
      addInfo();
      setLoad(false)
    }, 2000)
  }, [])
  
  return (
    <>
    {
      load && <h2 style={{color: "white"}}>Cargando...</h2>
    }
      <h1>Api Rick and Morty</h1>
    </>
  )
}

export default App
