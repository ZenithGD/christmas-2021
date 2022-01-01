import React from 'react'
import Image from 'next/image'

function TreeFooter() {
    return (
        <div style={{width: "100%"}}>
            <img
                style={{position: "absolute", width: "100%", transform: "translateY(-99%)", zIndex: 5}}
                src="/wave-haikei.png"
            />
            <div className='tp-footer'>
                <div>
                    Creado por Darío Marcos Casalé <b>2021</b>
                </div>
                <div style={{fontSize: "small"}}>
                    Iconos hechos por <a href="https://www.flaticon.com/authors/tulpahn" title="tulpahn">tulpahn</a> de <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
                <div style={{fontSize: "small"}}>
                    Desplegado en <a href="https://vercel.com" title="vercel">Vercel</a> desde <a href="https://github.com/ZenithGD/christmas-2021" title="Github">Github</a>
                </div>
            </div>
        </div>
    )
}

export default TreeFooter
