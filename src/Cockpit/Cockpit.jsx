import React, { useEffect, memo, useRef, useState } from 'react'

function Cockpit(props) {
    const [init, setInit] = useState("hadi bukhari")
    const ref = useRef('this is ref')
    console.log("useRef", ref.current)

    useEffect(() => {
        console.log("this is cockpit")
        return () => {
            console.log("cockpit cleaned")
        }
    }, [])
    console.log("Cockpit")
    return (
        <div>
            <h2 ref={ref}>this is me )</h2>
            <input value={init} ref={ref} onChange={() => console.log("change")} />
            {/* <button onClick={props.show}>Remove All</button> */}
        </div>
    )
}

export default memo(Cockpit);
