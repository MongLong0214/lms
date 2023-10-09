'use client'

import React from 'react'

interface LayoutProps {
children: React.ReactNode
}

function Layout({
    children,
                }: LayoutProps) {
    return (
        <div className='h-screen flex items-center justify-center'>
            {children}
        </div>
    )
}

export default Layout;