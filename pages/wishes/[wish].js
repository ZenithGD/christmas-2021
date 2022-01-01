import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useWishContext } from '../../context/WishContext'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

function WishFocus() {

    const router = useRouter()
    const { wish } = router.query
    const { wishes, toggleWish } = useWishContext()

    const handleClick = (e) => {
        e.preventDefault();
        toggleWish(wish)
        if ( wishes[wish].added ) {
            toast.success(`¡Se ha añadido '${wishes[wish].name}' a la lista!`)
        } else {
            toast.success(`¡Se ha quitado '${wishes[wish].name}' de la lista!`)
        }
        router.push("/createtree")
    }

    return (
        <>
            <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap"
                rel="stylesheet"
                />
            </Head>
            <div className="ct-container">
                { wishes[wish] === undefined ? (
                    <p>Cargando...</p>
                ) : (<div className='ct-content'>
                    <h1 style={{"font-family": 'Mountains of Christmas'}}>{wishes[wish].name}</h1>
                    <div>
                        <Image
                            priority={true}
                            className='wish-img'
                            width={100}
                            height={100}
                            src={wishes[wish].src}
                        />
                    </div>
                    <p>{wishes[wish].desc}</p>
                    <Link href="/createtree">
                        <button className="ct-button" onClick={handleClick}>
                            <p>{wishes[wish].added ? "Quitar" : "Añadir"}</p>
                        </button>
                    </Link>
                </div>)}
            </div>
        </>
    )
}

export default WishFocus
