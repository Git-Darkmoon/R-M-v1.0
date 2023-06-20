import { useEffect, useState } from "react"
import Characters from "./Characters"
import Hero from "./Hero"
import Nav from "./Nav"

function App() {
  const API_URL = "https://rickandmortyapi.com/api/character"

  const [data, setData] = useState([])

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      console.log(result.results)
      setData(result.results)
    } catch (error) {
      setData([])
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData(API_URL)
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
