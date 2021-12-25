import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Snowfall from 'react-snowfall'
import Tree from '../components/Tree'
import { useWishContext } from '../context/WishContext'
import TreeFooter from '../components/TreeFooter'

function tree() {

    const { wishes } = useWishContext()

    return (
        <div className='tp-container'>
            <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap"
                rel="stylesheet"
                />
            </Head>
            <Image
                priority
                className='tp-bg'
                height="100%"
                layout="fill"
                objectFit="cover"
                src="/christmas-bg.png"
            />
            <Snowfall style={{zIndex: 5}}color="#d1c7ff" snowflakeCount={50}/>
            <div className='tp-content'>
                <h1 style={{"fontFamily": 'Mountains of Christmas'}}>¡Feliz Navidad y feliz año 2022!</h1>
                <Tree wishes={wishes.filter(item => item.added)} />
            </div>
            <TreeFooter />
        </div>
    )
}

export default tree
