import { useEffect, useState } from "react"
import Characters from "./Characters"
import Hero from "./Hero"
import title from "./assets/title.png"
import Loading from "./Loading"

function App() {
  const API_URL = "https://rickndmortyapi.com/api/character"

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      console.log(result.results)
      setData(result.results)
      setIsLoading(false)
    } catch (error) {
      setData([])
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData(API_URL)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <section className="principal">
        <header>
          <img src={title} alt="" />
        </header>
        <Hero />
      </section>
      <Characters data={data} />
    </>
  )
}

export default App
