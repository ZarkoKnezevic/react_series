import React from 'react'

const Box = ({newColor}) => {
    return (
        <div
            className="box"
            style={{ background: `${newColor}` }}
        >
            {newColor.length ? (
                <p>{newColor}</p>
            ) : (
                <p>Empty Value</p>
            )}
        </div>
    )
}
export default Box
