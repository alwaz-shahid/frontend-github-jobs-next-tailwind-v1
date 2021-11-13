import React from 'react'

const Layout = ({ children }) => {
    return (
        <section className="max-w-7xl min-h-screen mx-auto relative">
            {children}
        </section>
    )
}

export default Layout