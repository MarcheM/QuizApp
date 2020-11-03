import React from 'react'

const MainContent = ({ children }) => {

    return (
        <div style={{ backgroundColor: "rgba(249, 242, 250, 0.65)", height: "80vh", width: "100%", maxWidth: '1400px', margin: "0 auto" }}>
            {children}

        </div>
    )

}

export default MainContent