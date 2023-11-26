'use client'

import React from 'react'
import { UserButton } from '@clerk/nextjs'

interface NavbarRoutesProps {

}

function NavbarRoutes({}: NavbarRoutesProps) {
    return (
        <div className='flex gap-x-2 ml-auto'>
            <UserButton/>
        </div>
    )
}

export default NavbarRoutes;