import React from 'react'

const Button = ({name, handleGet}) => {
    return (
        <button
            className="btn"
            onClick={() => handleGet(name)}
        >
            {name}
        </button>
    )
}
export default Button
