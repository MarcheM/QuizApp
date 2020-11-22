import React from 'react'


const GridContainer = ({ children }) => {
    return <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "200px", gap: "10px", padding: "10px" }}>
        {children}
    </div>
}

export default GridContainer