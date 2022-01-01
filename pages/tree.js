import React from 'react'
import Head from 'next/head'
import Snowfall from 'react-snowfall'
import Tree from '../components/Tree'
import TreeFooter from '../components/TreeFooter'

function tree() {

    return (
        <div className='tp-container'>
            <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap"
                rel="stylesheet"
                />
            </Head>
            <Snowfall style={{zIndex: 10}} color="#d1c7ff" snowflakeCount={45}/>
            <Snowfall style={{zIndex: 1}} color="#8147ff" snowflakeCount={75}/>
            <div className='tp-content'>
                <h1 style={{"fontFamily": 'Mountains of Christmas'}}>¡Feliz Navidad y feliz año 2022!</h1>
                <Tree />
            </div>
            <TreeFooter />
        </div>
    )
}

export default tree
