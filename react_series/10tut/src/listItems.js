import React from 'react'

const ListItems = ({items}) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
        </ul>
    )
}
export default ListItems
