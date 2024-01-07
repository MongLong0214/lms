'use client'

import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface PageProps {

}

function Page({}: PageProps) {
    return (
        <div>
            <Link
                href='/teacher/create'
            >
                <Button>
                    New Course
                </Button>
            </Link>

        </div>
    )
}

export default Page;