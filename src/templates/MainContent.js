import React from 'react'

const MainContent = ({ children }) => {

    return (
        <div style={{ backgroundColor: "rgba(256, 256, 256, 0.8)", height: "80vh", width: "100%", maxWidth: '1400px', margin: "0 auto", border: "4px solid #B6CFF9" }}>
            {children}

        </div>
    )

}

export default MainContent