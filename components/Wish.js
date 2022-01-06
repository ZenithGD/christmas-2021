import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Wish({ id, content }) {

    return (
        <>
            <Link href={`/wishes/${id}`} >
                <a className='wish-container'>
                    <h2>{content.name}</h2>
                    <Image
                        className='wish-img'
                        width="80%"
                        height="80%"
                        src={content.src}
                    />
                    {content.added && <svg xmlns="http://www.w3.org/2000/svg" className='wish-tick' viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>}
                </a>
            </Link>
        </>
    )
}

export default Wish
