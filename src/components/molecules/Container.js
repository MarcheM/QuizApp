import React from 'react'

const Container = ({ children }) => {
    return <div style={{ backgroundColor: "rgba(256, 256, 256, 0.6)", width: "95%", maxWidth: '1600px', margin: "0 auto", border: "4px solid #B6CFF9" }} >
        {children}

    </div >
}

export default Container