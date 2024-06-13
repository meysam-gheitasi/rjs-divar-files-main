import { createContext, useContext, useState } from "react"

const ProductsContext = createContext()

function ProductsProvider({ children }) {

    const [search, setSearch] = useState("")

    const [displayed, setDisplayed] = useState([])

    const [query, setQuery] = useState({})

    return (
        <ProductsContext.Provider value={{ search, setSearch, displayed, setDisplayed, query, setQuery }} >
            {children}
        </ProductsContext.Provider>
    )
}

const useValue = () => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error('useValue must be used within a ProductsProvider');
    }
    return context;
}

export default ProductsProvider
export { useValue }