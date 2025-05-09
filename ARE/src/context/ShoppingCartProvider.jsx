import { createContext, useState } from "react";

const ShoppingCartContext = createContext([])

export const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([])

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext