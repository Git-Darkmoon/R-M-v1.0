import { useEffect } from "react"
import Characters from "./Characters"
import Hero from "./Hero"
import Nav from "./Nav"
import { useGlobalContext } from "./Context"

function App() {
  const API_URL = "https://rickandmortyapi.com/api/character"

  const { data, fetchData } = useGlobalContext()

  useEffect(() => {
    fetchData(API_URL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section className="principal">
        <Nav />
        <Hero />
      </section>
      <Characters data={data} />
    </>
  )
}

export default App
