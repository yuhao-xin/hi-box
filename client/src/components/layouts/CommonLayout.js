import React from 'react'
import Navbar from '../common/Navbar'
export default function CommonLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className='container'>
                {children}
            </div>
        </>
    )
}