import { createContext } from "react"


function ProductsProvider({ children }) {

    const ProductsProvider = createContext()
    

    return (
        <ProductsProvider.Provider >
            {children}
        </ProductsProvider.Provider>
    )
}

export default ProductsProvider