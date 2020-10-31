import React from 'react'

const PageWrapper = ({ title, children }) => {
    return <div style={{ textAlign: 'center' }}>
        <h1>{title}</h1>
        {children}
    </div>


}

export default PageWrapper