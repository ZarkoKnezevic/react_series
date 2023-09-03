import React from 'react'

const Footer = ({length}) => {
    const today = new Date();

    return (
        <footer>
            <p>We have {length} { length === 1 ? "item" : "items"} - Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}
export default Footer
