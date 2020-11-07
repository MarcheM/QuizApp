import React from 'react'

const MainContent = ({ title, children }) => {

    return (
        <>
            <div style={{ textAlign: "center", padding: "10px" }} > <h1>{title}</h1></ div>
            <div style={{ backgroundColor: "rgba(256, 256, 256, 0.6)", width: "95%", maxWidth: '1600px', margin: "0 auto", border: "4px solid #B6CFF9" }} >
                {children}

            </div >
        </>
    )

}

export default MainContent