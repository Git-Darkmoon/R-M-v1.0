/* eslint-disable react/prop-types */
import Character from "./Character"

function Characters({ data }) {
  return (
    <>
      <h2 className="characters-title">Characters</h2>
      <section className="characters-container">
        {data.map((item) => {
          const { id, image, name, status, species } = item

          return (
            <Character
              key={id}
              image={image}
              name={name}
              status={status}
              species={species}
            />
          )
        })}
      </section>
    </>
  )
}

export default Characters
