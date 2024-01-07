'use client'

import React from 'react'
import * as z from "zod"
import { zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

const formSchema = z.object({
    title: z.string().min(1,{
        message:"Title is Required"
    })
})

interface PageProps {

}

function Page({}: PageProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })
    return (
        <div>create</div>
    )
}

export default Page;