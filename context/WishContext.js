import React, { useState, useContext, createContext } from 'react'

const WishContext = createContext()

const wishList = [
    {
        name: "Deseo",
        desc: "text text text",
        src:  "/decos/acebo.png",
        added: false
    },
    {
        name: "Deseo",
        desc: "text text text",
        src:  "/decos/angel.png",
        added: false
    },
    {
        name: "Deseo",
        desc: "text text text",
        src:  "/decos/bola-arbol.png",
        added: false
    },
    {
        name: "Deseo",
        desc: "text text text",
        src:  "/decos/bola-copo.png",
        added: false
    },
    {
        name: "Deseo",
        desc: "text text text",
        src:  "/decos/bola-ornam1.png",
        added: false
    },
    {
        name: "Deseo",
        desc: "text text text",
        src:  "/decos/bola-ornam2.png",
        added: false
    },
    {
        name: "Deseo",
        desc: "text text text",
        src:  "/decos/bola-reno.png",
        added: false
    },
]

export function WishProvider({children}) {

    const [wishes, setWishes] = useState(wishList)
    const toggleWish = (id) => {
        let newWishes = [...wishes]
        newWishes[id].added = !newWishes[id].added
        setWishes(newWishes)
    }
    const value = {wishes, toggleWish}
    return <WishContext.Provider value={value}>{children}</WishContext.Provider>
}

export function useWishContext() {
    const context = useContext(WishContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}
