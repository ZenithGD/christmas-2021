import React from 'react'
import Image from 'next/image'

function TreeFooter() {
    return (
        <div style={{width: "100%"}}>
            <img
                style={{position: "absolute", width: "100%", transform: "translateY(-100%)", zIndex: 5}}
                src="/wave-haikei.png"
            />
            <div className='tp-footer'>
                <div>
                    Creado por Darío Marcos Casalé - 2021
                </div>
                <div>
                    Icons made by <a href="https://www.flaticon.com/authors/tulpahn" title="tulpahn">tulpahn</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
        </div>
    )
}

export default TreeFooter
