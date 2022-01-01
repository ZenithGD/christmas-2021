import React from 'react'
import Image from 'next/image'
import { useWishContext } from '../context/WishContext'

function Tree() {

    const { wishes } = useWishContext()
    var treeWishes = wishes.filter(item => item.added)

    return (
        <div className='tree-container'>
            <Image
                priority={true}
                className='mainpage-bg'
                layout="fill"
                objectFit="scale-down"
                src="/arbolnavidad.png"
            />
            <div className='wishes-container'>

            </div>
        </div>
    )
}

export default Tree
