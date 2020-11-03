import React from 'react'

const MainContent = ({ children }) => {

    return (
        <div style={{ backgroundColor: "#F9F2FA", height: "80vh", width: "100%", maxWidth: '1400px', margin: "0 auto", opacity: '0.5' }}>
            {children}

        </div>
    )

}

export default MainContent