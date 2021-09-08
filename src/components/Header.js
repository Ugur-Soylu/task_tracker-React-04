import React from 'react'
import Button from "./Button"
// import PropTypes from "prop-types"

function Header({title, isTaskBarShowed, toggleShow}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={isTaskBarShowed ? "steelblue" :"purple"} 
            text = {isTaskBarShowed ? "Hide Create a Task Bar":"Show Create a Task Bar"}
            toggleShow={toggleShow}/>
        </header>
    )
}

// Header.defaultProps ={
//     title : "Task tracker as default"
// } //Bu yöntemle default değer atanabilir !

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// } bu yöntemle de propsun string olması istenebilir!

export default Header
