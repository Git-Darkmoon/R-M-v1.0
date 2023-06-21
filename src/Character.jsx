// eslint-disable-next-line react/prop-types
function Character({ image, name, status, species }) {
  return (
    <article className="character-card">
      <picture className="character-avatarContainer">
        <img
          className="character-avatarPic "
          src={image}
          alt={name + ": rick and morty character"}
          width="300"
          height="300"
          loading="lazy"
        />
      </picture>
      <section className="character-info">
        <h2 className="character-name">{name}</h2>
        <div className="character-state">
          <div
            className={`character-stateIndicator ${
              status === "Alive" && "alive"
            } ${status === "Dead" && "dead"}`}
          ></div>
          <h3 className="character-stateInfo">
            {status} - {species}
          </h3>
        </div>
        <div className="btnContainer">
          <button className="character-DetailsBtn">Details</button>
        </div>
      </section>
    </article>
  )
}

export default Character
