import { useEffect } from "react"
import Characters from "./Characters"
import Hero from "./Hero"
import Nav from "./Nav"
import { useGlobalContext } from "./Context"
import Footer from "./Footer"
import ModalDetails from "./ModalDetails"

function App() {
  const randomPage = Math.round(Math.random() * 42)

  const API_URL = `https://rickandmortyapi.com/api/character?page=${randomPage}`

  const { fetchData } = useGlobalContext()

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
      <Characters />
      <ModalDetails />

      <Footer />
    </>
  )
}

export default App
