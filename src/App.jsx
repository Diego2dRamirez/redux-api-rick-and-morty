import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addData } from "./features/data/dataSlice";
import { Loader } from "./components/Load";
import { CardsList } from "./components/CardsList";


function App() {
  const currentPage = useSelector(state => state.page)
  const dispatch = useDispatch()
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setLoad(true);

    async function addInfo() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      const info = await response.json();
      dispatch(addData(info.results))
      setLoad(false)
    }
    setTimeout(() => {
      addInfo();
    }, 1000)
  }, [currentPage])

  return (
    <section className="container py-5">
      {
        load ?
          <Loader />
          :
          <CardsList />
      }
    </section>
  )
}

export default App
