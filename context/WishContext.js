import React, { useState, useContext, createContext } from 'react'

const WishContext = createContext()

const wishList = [

]

export function WishProvider({children}) {
    const [wishes, setWishes] = useState(wishList)

    const value = {wishes, setWishes}
    return <WishContext.Provider value={value}>{children}</WishContext.Provider>
  }

export function useWishContext() {
    const context = useContext(WishContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}
