import React from 'react'

function NewContainer(props) {
    return (
        <div className={props.Class}>
            {props.children}
        </div>
    )
}

export default NewContainer
