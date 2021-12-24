import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ListOfWishes from '../components/ListOfWishes'
import { WishProvider }from '../context/WishContext'

function createtree() {
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
                    <Link href="#">
                        <button className="ct-button">
                            <p>Comenzar</p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default createtree
