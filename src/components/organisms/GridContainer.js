import React from 'react'


const GridContainer = ({ children }) => {
    return <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", padding: "10px", overflow: "auto" }}>
        {children}
    </div>
}

export default GridContainer