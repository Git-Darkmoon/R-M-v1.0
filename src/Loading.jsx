import loadingRing from "./assets/loadingRing.svg"

function Loading() {
  return (
    <main className="loading">
      <img src={loadingRing} alt="" />
      <h2 className="loadingTxt">Interdimensional syncing in progress...</h2>
    </main>
  )
}

export default Loading
