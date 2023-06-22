import { useState, createContext, useContext } from "react"

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [data, setData] = useState([])

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setData(result.results)
    } catch (error) {
      setData([])
      console.log(error)
    }
  }

  function filterCharacters(dataArray, cName) {
    return dataArray.filter((item) =>
      item?.name?.toLowerCase().includes(cName?.toLowerCase().trim())
    )
  }

  return (
    <AppContext.Provider value={{ data, setData, fetchData, filterCharacters }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
