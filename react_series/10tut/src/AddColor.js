import React from 'react'

const AddColor = ({newColor, setColor}) => {
    return (
        <form className="changeColor" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="colorChange">Add Color Name</label>
            <input
                autoFocus
                type="text"
                id="colorChange"
                placeholder="Add Color Name"
                required
                value={newColor}
                onChange={(e) => setColor(e.target.value)}
            />
        </form>
    )
}
export default AddColor
