import React from 'react'

const Navbar = () => {
    return (
         <div className="grid grid-flow-col justify-">
            <div className="text-lg">Logo</div>
            <div className="grid grid-flow-col text-sm justify-evenly">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
            </div>
            <div>Menu Button</div>
        </div>
    )
}

export default Navbar
