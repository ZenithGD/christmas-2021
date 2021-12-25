import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Snowfall from 'react-snowfall'

export default function Home() {
    return (
        <>
            <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap"
                rel="stylesheet"
                />
            </Head>
            <Image
                priority={true}
                className='mainpage-bg'
                height="100vh"
                layout="fill"
                objectFit="cover"
                src="/christmas-bg.png"
            />
            <div className="mainpage-container">
                <Snowfall color="#d1c7ff" snowflakeCount={50}/>
                <div className='mainpage-content'>
                    <h1 style={{"fontFamily": 'Mountains of Christmas'}}>El árbol de los deseos</h1>
                    <p>
                    text text text text text text text text text text text 
                    text text text text text text text text text text text 
                    text text text text text text text text text text text 
                    text text text text text text text text text text text 
                    text text text text text text text text text text text 
                    text text text text text text text text text text text 
                    text text text text text text text text text text text 
                    </p>
                    <Link href="createtree">
                        <a className="mainpage-button">
                            <p>Comenzar</p>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}
