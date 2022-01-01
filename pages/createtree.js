import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ListOfWishes from '../components/ListOfWishes'
import { useWishContext } from '../context/WishContext'
import toast from 'react-hot-toast'

function createtree() {

    const router = useRouter();
    const { wishes } = useWishContext()
    var added = wishes.filter(item => item.added).length
    
    const handleClick = (e) => {
        e.preventDefault();
        if ( added < 5 ) {
            toast.error(`Añade ${5 - added} deseos a tu lista para continuar.`)
        } else {
            router.push("/tree")
        }
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
                
                <div className='ct-content'>
                    <h1 style={{"font-family": 'Mountains of Christmas'}}>Elige tus deseos</h1>
                    <ListOfWishes containerStyle="ct-list-container" />
                    <button onClick={handleClick} className="ct-button">
                        <p>Terminar</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default createtree
