import React from 'react'
import '../../index.css'

const Container = ({ title, children }) => {
    return <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <div style={{ textAlign: "center", padding: "10px" }} > <h1>{title}</h1></ div>
        <div className="container" >
            {children}
        </div >
    </div>
}

export default Container