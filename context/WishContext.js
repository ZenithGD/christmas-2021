import React, { useState, useContext, createContext } from 'react'

const WishContext = createContext()

const wishList = [
    {
        name: "Salud",
        desc: "Que cuidemos nuestro cuerpo con buenos hábitos para que la salud nos acompañe en el camino de la vida.",
        src:  "/decos/acebo.png",
        added: false
    },
    {
        name: "Resiliencia",
        desc: "Que aprendamos a controlar las situaciones adversas de la vida sin desfallecer, procurando afrontar las emociones difíciles con espíritu positivo",
        src:  "/decos/bola-arbol.png",
        added: false
    },
    {
        name: "Humor",
        desc: "Que riamos con elegancia e ingenio, sin bromas groseras, porque el humor es una buena medicina para el alma y hace nuestra vida agradable",
        src:  "/decos/tambor.png",
        added: false
    },
    {
        name: "Optimismo",
        desc: "Que nos fijemos en el lado amable de la vida y, aunque lleguen malos momentos, no nos demos por vencidos.",
        src:  "/decos/campanita.png",
        added: false
    },
    {
        name: "Generosidad",
        desc: "Que seamos virtuosos, compasivos, agradecidos, solidarios, capaces de perdonar y de dar tiempo a quien lo necesita ",
        src:  "/decos/bola-papa-noel.png",
        added: false
    },
    {
        name: "Nobleza",
        desc: "Que seamos leales, honrados, justos, para mostrar que es posible ser héroes de lo cotidiano",
        src:  "/decos/reno.png",
        added: false
    },
    {
        name: "Sensibilidad",
        desc: "Que seamos capaces de emocionarnos ante la belleza, ante las artes y que cultivemos los buenos sentimientos",
        src:  "/decos/bola-copo.png",
        added: false
    },
    {
        name: "Defensa del medio ambiente",
        desc: "Que cooperemos con nuestros actos en la defensa del medioambiente y seamos capaces de crear un futuro mejor.",
        src:  "/decos/palmita.png",
        added: false
    },
    {
        name: "Respeto",
        desc: "Que sepamos respetarnos a nosotros mismos y a los demás, comportándonos dignamente incluso en los desacuerdos",
        src:  "/decos/bola-reno.png",
        added: false
    },
    {
        name: "Buenas personas",
        desc: "Que nuestras conductas nazcan del corazón y de la autenticidad, para que los demás confíen en nuestra bondad. ",
        src:  "/decos/angel.png",
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
