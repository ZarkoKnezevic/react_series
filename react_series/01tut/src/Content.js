import React from 'react'
import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete }) => {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <h1>List is Emptay !!! :)</h1>
            )}
        </>
    )
}
export default Content
