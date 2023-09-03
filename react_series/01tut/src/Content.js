import React from 'react'
import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <h1>List is Emptay !!! :)</h1>
            )}
        </main>
    )
}
export default Content
