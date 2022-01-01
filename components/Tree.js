import React from 'react'
import Image from 'next/image'
import { useWishContext } from '../context/WishContext'

function Tree() {

    const { wishes } = useWishContext()
    var treeWishes = wishes.filter(item => item.added)

    return (
        <div className='tree-container'>
            <img
                style={{zIndex: 5, objectFit: "scale-down", position: 'absolute', height: "100%"}}
                src="/arbolnavidad.png"
            />
            <div className='wishes-container'>
                {wishes.filter(item => item.added).map((item, key) => (
                    <>
                        <img
                            src={item.src}
                            style={{width:"2rem", 
                                    height:"2rem", 
                                    transform: `translate( ${(Math.random() * 2 - 1) * key * 0.8}rem, ${Math.random() * 2 - 1}rem)`,
                                    filter: "drop-shadow(0px 5px 10px #212121)" }}
                            objectFit='scale-down'
                            layout='responsive'
                        />
                    </>
                ))}
            </div>
        </div>
    )
}

export default Tree
