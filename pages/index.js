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
            <div className="mainpage-container">
                <Snowfall style={{zIndex: 2}}color="#d1c7ff" snowflakeCount={50}/>
                <Snowfall style={{zIndex: 1}} color="#8147ff" snowflakeCount={75}/>
                <div className='mainpage-content'>
                    <h1 style={{"fontFamily": 'Mountains of Christmas'}}>El árbol de los deseos</h1>
                    <p>
                    En el día de Reyes, te envío este árbol digital para que lo decores con los deseos que te propongo.
                    <br/> 
                    Elige los que consideres más importantes para tu vida y tu felicidad,
                    y recibe mi abrazo y mi cariño. 
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
