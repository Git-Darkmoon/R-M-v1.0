/* eslint-disable react/prop-types */
import { useState } from "react"
import { SlMagnifier } from "react-icons/sl"
import Character from "./Character"
import { useGlobalContext } from "./Context"

function Characters() {
  const [characterName, setCharacterName] = useState("")

  const { data, setData, filterCharacters } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItems = filterCharacters(data, characterName)
    // console.log(newItems)
    setData(newItems)
  }

  return (
    <>
      <h2 className="characters-title">Characters</h2>
      <form className="characters-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="form-searchBar"
          autoComplete="off"
          placeholder="Search Characters"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          required
        />
        <button id="form-searchBtn">
          <SlMagnifier />
        </button>
      </form>
      <section className="characters-container">
        {data.map((item) => {
          return <Character key={item.id} {...item} />
        })}
      </section>
    </>
  )
}

export default Characters
