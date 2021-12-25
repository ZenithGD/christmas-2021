import '../styles/globals.css'
import '../styles/mainpage.css'
import '../styles/createtree.css'
import '../styles/tree.css'

import { WishProvider } from '../context/WishContext';

function MyApp({ Component, pageProps }) {

    
    return (
        <WishProvider>
            <Component {...pageProps} />
        </WishProvider>
    )
}

export default MyApp
