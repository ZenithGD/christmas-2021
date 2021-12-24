import React from 'react'
import Image from 'next/image'

function Wish({content}) {
    console.log(content.src)
    return (
        <div className='wish-container'>
            <h2>{content.name}</h2>
            <Image
                className='wish-img'
                width="90%"
                height="90%"
                src={content.src}
            />
        </div>
    )
}

export default Wish
