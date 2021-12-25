import React from 'react'
import Image from 'next/image'

function Tree({wishes}) {
    return (
        <div className='tree-container'>
            <Image
                className='mainpage-bg'
                layout="fill"
                objectFit="scale-down"
                src="/arbolnavidad.png"
            />
        </div>
    )
}

export default Tree
