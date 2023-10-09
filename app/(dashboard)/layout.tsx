'use client'

import React from 'react'
import Sidebar from './_components/sidebar'

interface LayoutProps {
children: React.ReactNode
}

function Layout({
    children,
                }: LayoutProps) {
    return (
        <div className='h-full'>
            <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'>
                <Sidebar/>
            </div>
            {children}
        </div>
    )
}

export default Layout;