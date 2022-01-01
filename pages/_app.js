import '../styles/globals.css'
import '../styles/mainpage.css'
import '../styles/createtree.css'
import '../styles/tree.css'

import { Toaster } from 'react-hot-toast'
import { WishProvider } from '../context/WishContext';

function MyApp({ Component, pageProps }) {

    
    return (
        <WishProvider>
            <div>
                <Toaster />
            </div>
            <Component {...pageProps} />
        </WishProvider>
    )
}

export default MyApp
