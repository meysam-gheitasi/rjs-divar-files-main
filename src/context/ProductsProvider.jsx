import { createContext, useState } from "react"


function ProductsProvider({ children }) {

    const ProductsProvider = createContext()

    const [search, setSerach] = useState("")

    const [displayed, setDisplayed] = useState([])

    const { query, setQuery } = useState({})

    return (
        <ProductsProvider.Provider value={{search, setSerach, displayed, setDisplayed, query, setQuery}} >
            {children}
        </ProductsProvider.Provider>
    )
}

export default ProductsProvider