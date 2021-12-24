import React from 'react'
import { useWishContext } from '../context/WishContext'
import Wish from './Wish'

function ListOfWishes({containerStyle}) {

    const { wishes } = useWishContext()

    return (
        <div className={containerStyle}>
            {wishes.map((wish, idx) =>
                <Wish id={idx} content={wish}/>)}
        </div>
    )
}

export default ListOfWishes
